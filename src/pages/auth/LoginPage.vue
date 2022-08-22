<template>
  <div class="flex justify-center full-height" :class="heightSize">
    <div
      class="card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto"
      id="login"
    >
      <div class="card-title" :class="finalBgColor">
        <svg
          id="logo"
          viewBox="0 0 483 483"
          style="enable-background: new 0 0 460 460"
          xml:space="preserve"
          width="128px"
          height="128px"
          v-html="logoMethod"
        ></svg>
        <h4>{{ logo }}</h4>
      </div>
      <div class="card-content bg-white">
        <q-input
          v-model="loginForm.email"
          autocomplete="username"
          :rules="[
            (val) =>
              isValidEmailAddress(val) ||
              'Por favor ingrese una dirección de correo válida.',
          ]"
          type="email"
          ref="email"
          lazy-rules
          class="col"
          label="Email"
          stack-label
        >
          <template v-slot:prepend>
            <q-icon name="alternate_email" />
          </template>
        </q-input>
        <q-input
          v-model="loginForm.password"
          autocomplete="current-password"
          :rules="[
            (val) =>
              val.length >= 4 || 'Por favor al menos ingrese 6 caracteres.',
          ]"
          ref="password"
          lazy-rules
          :type="isPwd ? 'password' : 'text'"
          class="col"
          label="Contraseña"
          stack-label
        >
          <template v-slot:prepend>
            <q-icon name="vpn_key" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <div class="card-actions inline-block vertical-middle">
        <q-btn
          type="submit"
          unelevated
          color="light-green-7"
          size="lg"
          class="full-width"
          label="Ingresar"
          @click="loginWithCredentials"
        ></q-btn>
      </div>
      <div
        class="text-grey-6 q-pa-md text-center"
        @click="$router.push({ name: 'register' })"
      >
        ¿No tienes una cuenta?
      </div>
      <q-separator spaced inset />
      <div class="card-actions inline-block vertical-middle">
        <q-btn unelevated @click="loginWithGoogle"
          ><img src="~assets/btn_google_signin_light_normal_web@2x.png"
        /></q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from 'src/composables/useAuth';
import { Platform } from 'quasar';
import { computed, ref } from 'vue';
import logoData from './logoData';
import { isValidEmailAddress } from 'src/utils/validations';

const { loginForm, loginWithGoogle, loginWithCredentials } = useAuth();
const isPwd = ref(true);
const toneColor = 10;
const bgColor = 'purple';
const logo = 'ContyFe';

// a computed ref
const heightSize = computed(() => {
  if (Platform.is.desktop) {
    return 'items-center';
  }
  return '';
});

const finalBgColor = computed(() => {
  return `bg-${bgColor}-${toneColor}`;
});

const logoMethod = computed(() => {
  return logoData[logo];
});
</script>
