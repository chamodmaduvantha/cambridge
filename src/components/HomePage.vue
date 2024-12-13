<template>
  <v-container>
    <v-card class="mx-auto mt-5" max-width="400" title="Student's Result Management System">
      <v-container>
        <v-text-field v-model="id" color="primary" label="Student ID" variant="underlined"></v-text-field>
        <v-text-field v-model="name" color="primary" label="Name" variant="underlined"></v-text-field>
        <v-text-field v-model="module1" color="primary" label="Module 01" variant="underlined" type="number"></v-text-field>
        <v-text-field v-model="module2" color="primary" label="Module 02" variant="underlined" type="number"></v-text-field>
        <v-text-field v-model="average" color="primary" label="Average" variant="underlined" readonly></v-text-field>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="submitData">Complete Submission
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import db from '../firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';

export default {
  name: 'StudentResultForm',
  data() {
    return {
      id: '',
      name: '',
      module1: null,
      module2: null,
    };
  },
  computed: {
    // Calculate average based on module1 and module2 values
    average() {
      if (this.module1 !== null && this.module2 !== null) {
        return ((parseFloat(this.module1) + parseFloat(this.module2)) / 2).toFixed(2); // rounding to 2 decimal places
      }
      return ''; // return an empty string if either module is not yet filled
    }
  },
  methods: {
    // Method to submit data to Firestore
    async submitData() {
      try {
        const colRef = collection(db, 'student');
        const dataObj = {
          id: this.id,
          name: this.name,
          module1: this.module1,
          module2: this.module2,
          average: this.average,
        };

        // Add data to Firestore
        const docRef = await addDoc(colRef, dataObj);
        console.log('Document was created with ID: ', docRef.id);

        // Optional: Reset form fields
        this.id = '';
        this.name = '';
        this.module1 = null;
        this.module2 = null;
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  }
};
</script>

<style></style>
