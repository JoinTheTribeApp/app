import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4),
  venture: yup
    .string()
    .required()
    .min(4),
  body: yup
    .string()
    .required()
    .min(8),
  rating: yup
    .string()
    .required()
    .min(1)
    .max(1)
    .test("is-num-1-10", "Must be a number 1 - 10", val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", venture: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
          console.log(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Teacher Name"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Workshop Name"
              onChangeText={props.handleChange("venture")}
              value={props.values.venture}
              onBlur={props.handleBlur("venture")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.venture && props.errors.venture}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Workshop NPS Score (1-10)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <TextInput
              multiline
              minHeight={100}
              style={globalStyles.input}
              placeholder="Notes"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
