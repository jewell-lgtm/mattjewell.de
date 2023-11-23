"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { get } from "lodash/fp";
import { FormEventHandler, useCallback, useEffect } from "react";
import { useAsyncCallback } from "react-async-hook";
import { create } from "zustand";

type FormData = {
  name: string;
  email: string;
  companySize: string;
  discussion: string;
};

type Store = FormData & {
  setName: (name: string) => void;
  setEmail: (name: string) => void;
  setCompanySize: (size: string) => void;
  setDiscussion: (discussion: string) => void;
};

export const useStore = create<Store>(set => ({
  name: "",
  email: "",
  companySize: "",
  discussion: "",
  setName: name => set({ name }),
  setEmail: email => set({ email }),
  setCompanySize: size => set({ companySize: size }),
  setDiscussion: discussion => set({ discussion }),
}));

const submitCoffeeForm = async (data: FormData) => {
  const response = await axios.post("/api/coffee-form", data);
  if (Math.floor(response.status / 100) !== 2) {
    throw response;
  }
};

export function CoffeeForm() {
  const {
    name,
    email,
    companySize,
    discussion,
    setName,
    setEmail,
    setCompanySize,
    setDiscussion,
  } = useStore();

  const submitForm = useAsyncCallback(submitCoffeeForm);

  const handleSubmit = useCallback<FormEventHandler>(
    e => {
      e.preventDefault();

      void submitForm.execute({
        name,
        email,
        companySize,
        discussion,
      });
    },
    [companySize, discussion, email, name, submitForm]
  );

  useEffect(() => {
    console.log("submitForm.status", submitForm.status);
  }, [submitForm.status]);

  return (
    <>
      {submitForm.status === "success" && (
        <Box p="5" borderWidth={1} borderRadius="md">
          <p>
            Thanks for your interest! I&apos;ll review this get back to you as
            soon as I can.
          </p>
        </Box>
      )}
      {submitForm.status !== "success" && (
        <Box
          as="form"
          onSubmit={handleSubmit}
          p="5"
          borderWidth={1}
          borderRadius="md"
          pointerEvents={submitForm.loading ? "none" : undefined}
          opacity={submitForm.loading ? 0.1 : undefined}
        >
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={e => setName(getTargetValue(e))} />
          </FormControl>

          <FormControl id="email" mt={4} isRequired>
            <FormLabel>Work Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(getTargetValue(e))}
            />
          </FormControl>

          <FormControl id="company-size" mt={4} isRequired>
            <FormLabel>Company Size</FormLabel>
            <Select
              placeholder="Select option"
              value={companySize}
              onChange={e => setCompanySize(getTargetValue(e))}
            >
              <option value="Just Me">Just Me</option>
              <option value="1-5">1-5</option>
              <option value="5-20">5-20</option>
              <option value="20-100">20-100</option>
              <option value="100+">100+</option>
            </Select>
          </FormControl>

          <FormControl id="discussion" mt={4}>
            <FormLabel>Discussion Topic</FormLabel>
            <Textarea
              placeholder="Give me a brief idea about what you'd like to discuss, as well as 2 or 3 options for when we could have a conversation for half an hour"
              value={discussion}
              onChange={e => setDiscussion(getTargetValue(e))}
            />
          </FormControl>

          <Button colorScheme="blue" type="submit" mt={4}>
            Book Free Consultation
          </Button>
        </Box>
      )}
    </>
  );
}

const getTargetValue = get("target.value");
