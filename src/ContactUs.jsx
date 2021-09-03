import { Box, Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    FormHelperText,
    Textarea,
    NumberInput,
    NumberInputField
} from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import ReactDOM from "react-dom";

export default function ContactUs() {

    function onChange(value) {
        console.log("Captcha value:", value);
      }
    
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors);

        const recaptchaRef = React.createRef();

    return(

        <Box padding='15'>
        <Heading>Contact Us:</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Company:</FormLabel>
        <Input {...register("Company")} placeholder='Company' />
        <FormControl isRequired>
        {/* // automatically gets `htmlFor` */}
        <FormLabel>First name:</FormLabel>
        {/* // automatically gets `id` and `aria-*` properties */}
        <Input {...register("First Name")} placeholder="First name" />
        {/* // automatically gets `id` and hides if `isInvalid` is passed to `FormControl` */}
        {/* <FormHelperText>Keep your first name short</FormHelperText> */}
        {/* // automatically gets `id` and shows if `isInvalid` is passed to `FormControl` */}
        {/* <FormErrorMessage>First name is invalid</FormErrorMessage> */}
        <FormLabel>Last name:</FormLabel>
        <Input {...register("Last name")} placeholder='Last name' />
        <FormLabel>Phone number:</FormLabel>
        <NumberInput  type='tel' >
        <NumberInputField {...register("Phone")} placeholder='Phone number' />
        </NumberInput>
        <FormLabel>Email:</FormLabel>
        <Input {...register("Email")} placeholder='Email' type='email'/>
        <RadioGroup >
        <FormLabel>Preferred method of contact:</FormLabel>
        <Stack direction="row">
        <Radio {...register("Method")}  value="Phone">Phone</Radio>
        <Radio {...register("Method")}  value="Email">Email</Radio>
        </Stack>
        </RadioGroup>
        <FormLabel>How may we help you?</FormLabel>
        <Textarea />
        </FormControl>
        <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey="6LekT0IcAAAAALG3H1H0l8piXzinS-5F3aDrbSfo"
      onChange={onChange}
      badge='inline'
    />

        <Button type='submit' >Submit</Button>
        </form>

        {/* <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl isInvalid={errors.name}>

        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
            id="name"
            placeholder="First name"
            {...register("First Name", {
            required: "This is required",
            minLength: { value: 3, message: "Minimum length should be 4" }
            })}
        />

        <FormLabel htmlFor="name">Last name</FormLabel>
        <Input
        id="name"
        placeholder="Last name"
        {...register("lastName", {
            required: "This is required",
            minLength: { value: 3, message: "Minimum length should be 4" }
        })}
        />

        <FormLabel htmlFor="tel">Phone Number</FormLabel>
        <Input
        type="tel"
        id="number"
        placeholder="Phone number"
        {...register("phoneNumber", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" }
        })}
        />

        <FormErrorMessage>
        {errors.name && errors.name.message}
        </FormErrorMessage>
    </FormControl>
    <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
    </Button>
    </form> */}

    {/* <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
    <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
    <input type="tel" placeholder="Phone Number" {...register("Phone Number", {required: true, maxLength: 12})} />
    <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
    <textarea {...register("Please tell us how we can work together:", {})} />
    <select {...register("Best way to contact you:", { required: true })}>
        <option value="Email">Email</option>
        <option value=" Phone"> Phone</option>
    </select>

    <input type="submit" />
    </form> */}
    </Box>
    )

}