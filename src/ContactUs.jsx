import { Box, Flex, Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import {
    FormLabel,
    FormControl,
    Input,
    Button,
    Textarea,
    NumberInput,
    NumberInputField
} from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import emailjs from 'emailjs-com';
// import ReactDOM from "react-dom";

export default function ContactUs() {


    function onChange(value) {
        console.log("Captcha value:", value);
    }
    
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
        // const onSubmit = data => sendEmail(data)
        // console.log(data);
        console.log(errors);

        const recaptchaRef = React.createRef();

        function sendEmail(e) {
            e.preventDefault();
            console.log(e)
            emailjs.sendForm('service_ma7qzox', 'template_2zldsdi', e.target, 'user_9lJtsZILDa7jMOXgEvghk')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            }

    return(
        <Flex bg='#F9F9F9' margin='5' direction='column'>
        <Box>
        <Heading>Contact Us:</Heading>
        </Box>
        <Box >
        <form onSubmit={sendEmail}>
        <FormLabel>Company:</FormLabel>
        <Input marginBottom='2' {...register("Company")} placeholder='Company' />
        <FormControl isRequired>
        {/* // automatically gets `htmlFor` */}
        <FormLabel>First name:</FormLabel>
        {/* // automatically gets `id` and `aria-*` properties */}
        <Input marginBottom='2' {...register("First name")} placeholder="First name" />
        {/* // automatically gets `id` and hides if `isInvalid` is passed to `FormControl` */}
        {/* <FormHelperText>Keep your first name short</FormHelperText> */}
        {/* // automatically gets `id` and shows if `isInvalid` is passed to `FormControl` */}
        {/* <FormErrorMessage>First name is invalid</FormErrorMessage> */}
        <FormLabel>Last name:</FormLabel>
        <Input marginBottom='2' {...register("Last name")} placeholder='Last name' />
        <FormLabel>Phone number:</FormLabel>
        <NumberInput marginBottom='2' type='tel' >
        <NumberInputField {...register("Phone")} placeholder='Phone number' />
        </NumberInput>
        <FormLabel>Email:</FormLabel>
        <Input marginBottom='2' {...register("Email")} placeholder='Email' type='email'/>
        <RadioGroup marginBottom='2' >
        <FormLabel>Preferred method of contact:</FormLabel>
        <Stack direction="row">
        <Radio {...register("Method")}  value="Phone">Phone</Radio>
        <Radio {...register("Method")}  value="Email">Email</Radio>
        </Stack>
        </RadioGroup>
        <FormLabel>How may we help you?</FormLabel>
        <Textarea marginBottom='2' {...register("Sum")} />
        </FormControl>
        <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LekT0IcAAAAALG3H1H0l8piXzinS-5F3aDrbSfo"
        onChange={onChange}
        badge='inline'
        />

        <Button colorScheme='blue' margin='2' type='submit' >Submit</Button>
        </form>
    </Box>
    </Flex>
    )

}