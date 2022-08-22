<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> ContyFe - Control de Acceso </q-toolbar-title>
        <q-space />
        <!--q-btn
          label="Salir"
          @click="logout"
        /-->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer v-if="devmode" elevated class="bg-blue text-white">
      <q-toolbar>
        <q-toolbar-title> Modo de pruebas... </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthLayout',

  setup() {
    const devmode = process.env.DEV;

    return {
      devmode,
    };
  },
});
</script>
