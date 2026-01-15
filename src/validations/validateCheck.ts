import { createStudentSchema } from "./students";

const dataToValidate = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 12,
  gender: 'male',
  avgMark: 10.2,
};

const validationResult = createStudentSchema.validate(dataToValidate, {abortEarly: false})
if(validationResult.error) {
    console.error(validationResult.error.message)
} else {
    console.log('Data is valid')
}
