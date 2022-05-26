// import { extend, configure } from "vee-validate";
// import { required, email, min, integer } from "vee-validate/dist/rules";
// import { i18n } from "@/initializers/vue-i18n";

// configure({
//   defaultMessage: (field, values) => {
//     values._field_ = `fields.${field}`;

//     return {
//       validation: `validation.${values._rule_}`,
//       values,
//     };
//   },
// });

// extend("required", required);

// // Install email rule and message.
// extend("email", email);

// // Install min rule and message.
// extend("min", min);

// extend("integer", integer);

import {
  required,
  confirmed,
  length,
  email,
  max_value,
  digits,
  max,
  min,
} from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", required);
extend("equal_to", confirmed);
extend("length", length);
extend("email", email);
extend("max_value", max_value);
extend("digits", digits);
extend("max", max);
extend("min", min);
