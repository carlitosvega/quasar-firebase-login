<template>
  <q-page padding>
    <div class="q-pa-lg">
      <form @submit.prevent="register">
        <div class="row q-mb-lg">
          <q-banner class="bg-grey-3 col">
            <template v-slot:avatar>
              <q-icon name="account_circle" color="primary" />
            </template>
            Registro a Contyfe!
          </q-banner>
        </div>
        <div class="row q-mb-lg">
          <q-input
            v-model="registerForm.email"
            :rules="[
              (val) =>
                isValidEmailAddress(val) ||
                'Por favor ingrese una dirección de correo válida.',
              (val) =>
                !IsValidPasswordConfirmed ||
                'El password con la confirmación no coinciden',
            ]"
            type="email"
            ref="email"
            lazy-rules
            outlined
            class="col"
            label="Email"
            stack-label
          />
        </div>
        <div class="row q-mb-lg">
          <q-input
            v-model="registerForm.password"
            :rules="[
              (val) =>
                val.length >= 6 || 'Por favor al menos ingrese 6 caracteres.',
            ]"
            ref="password"
            lazy-rules
            type="password"
            outlined
            class="col"
            label="Contraseña"
            stack-label
          />
        </div>
        <div class="row q-mb-lg">
          <q-input
            v-model="formData.confirmpassword"
            :rules="[
              (val) =>
                val.length >= 6 || 'Por favor al menos ingrese 6 caracteres.',
              (val) =>
                !IsValidPasswordConfirmed ||
                'La contraseña con la confirmación no coinciden',
            ]"
            ref="confirmpassword"
            lazy-rules
            type="password"
            outlined
            class="col"
            label="Confirmar contraseña"
            stack-label
          />
        </div>
        <div class="row q-mb-md">
          <q-toggle
            v-model="aceptaterminos"
            label="Acepta términos y condiciones"
          />
        </div>
        <div class="row q-mb-md justify-center">
          <q-btn
            @click="$router.push('/terminosycondiciones')"
            label="Ver Términos y Condiciones"
            flat
          ></q-btn>
        </div>
        <div class="row q-mb-md">
          <q-btn
            flat
            label="Ya tengo mi cuenta"
            @click="$router.push('/login')"
          />

          <q-separator />

          <q-btn
            class="relative-position"
            color="primary"
            label="Crear"
            type="submit"
          />
        </div>
      </form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useAuth } from 'src/composables/useAuth';
import { isValidEmailAddress } from 'src/utils/validations';

import { defineComponent, computed } from 'vue';
// import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'RegisterPage',

  setup() {
    const { registerForm, register } = useAuth();
    const IsValidPasswordConfirmed = computed(() => {
      console.log('Password: ', registerForm.password);
      console.log('Confirmapwd: ', registerForm.confirmpassword);
      let check = registerForm.password === registerForm.confirmPassword;
      return check;
    });

    return {
      isValidEmailAddress,
      registerForm,
      register,
    };
  },
});
</script>
