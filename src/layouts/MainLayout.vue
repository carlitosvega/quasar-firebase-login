<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          ContyFe 3.0.2
          <q-btn color="primary" @click="$q.fullscreen.toggle()"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" />
          <q-btn label="descargar" icon="laptop"></q-btn>
        </q-toolbar-title>
        <div class="q-pa-md">
          <q-btn-dropdown>
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon left name="person" />
                <div class="text-center">
                  {{ userName }}
                </div>
              </div>
            </template>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Configuración</div>
                <q-btn icon="build" label="Cambiar empresa" @click="$router.push('/seleccionarempresa')" />
                <q-btn icon="build" label="Configuración de parámetros" @click="$router.push('/parametros')" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img :src="authStore.authUser?.photoURL!" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">
                  {{ userName }}
                </div>

                <q-btn color="primary" label="Salir" push size="sm" @click="logout" v-close-popup />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
        <q-btn @click="dialogapps = true" flat dense aria-label="Aplicaciones">
          <q-icon name="apps" />
        </q-btn>
        <q-dialog v-model="dialogapps" position="right">
          <q-card>
            <q-card-section class="row items-center">
              <div>
                <div class="text-weight-bold">Aplicaciones ContyFe</div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row q-pa-sm">
                <q-card class="my-card q-pa-md q-ma-sm">
                  <q-img src="statics/fe/imgfe.png"> </q-img>

                  <q-card-section>
                    <div class="text-subtitle2">Facturación Electrónica</div>
                  </q-card-section>

                  <q-card-actions>
                    <q-btn flat>Próximamente</q-btn>
                  </q-card-actions>
                </q-card>
                <q-card class="my-card q-pa-md q-ma-sm">
                  <q-img src="statics/nomina/imgnom.png"> </q-img>

                  <q-card-section>
                    <div class="text-subtitle2">Nómina</div>
                  </q-card-section>

                  <q-card-actions>
                    <q-btn flat>Próximamente</q-btn>
                  </q-card-actions>
                </q-card>
              </div>
              <div class="row q-pa-sm">
                <q-card class="my-card q-pa-md q-ma-sm">
                  <q-img src="statics/analisis/img.png"> </q-img>

                  <q-card-section>
                    <div class="text-subtitle2">Análisis empresarial</div>
                  </q-card-section>

                  <q-card-actions>
                    <q-btn flat>Próximamente</q-btn>
                  </q-card-actions>
                </q-card>
                <q-card class="my-card q-pa-md q-ma-sm">
                  <q-img src="statics/sinc/img.png"> </q-img>

                  <q-card-section>
                    <div class="text-subtitle2">Sincronización</div>
                  </q-card-section>

                  <q-card-actions>
                    <q-btn flat>Próximamente</q-btn>
                  </q-card-actions>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-if="devmode" elevated class="bg-warning text-white">
      <q-toolbar>
        <q-toolbar>
          <q-toolbar-title>
            <div v-if="devmode" :color="devmode ? 'negative' : 'primary'">
              Pruebas Contyfe
            </div>
          </q-toolbar-title>
          <q-separator v-if="devmode" dark vertical inset></q-separator>
          >
          <q-separator dark vertical inset></q-separator>
        </q-toolbar>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from 'src/stores/auth-store';
import { useAuth } from 'src/composables/useAuth';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    const devmode = process.env.DEV;
    const dialogapps = false;
    const ruc = '1002709143';
    const userName = 'UsuarioCarlos';
    const { logout } = useAuth();
    const authStore = useAuthStore();


    // Computed
    // Nothing

    return {
      logout,
      authStore,
      devmode,
      dialogapps,
      leftDrawerOpen,
      ruc,
      userName,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
