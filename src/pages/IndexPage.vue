<template>
  <q-page class="bg-grey">
    <div class="container q-pa-md">
      <div class="row">
        <div class="col-6">
          <q-card class="q-pa-md">
            <q-card-section>
              <q-form ref="form_login">
                <q-input
                  v-model="login.usuario"
                  data_cy="login.usuario"
                  outlined
                  class="full-width"
                  clearable
                  label="Usuário *"
                  :rules="[(val) => !!val || 'Informe o usuário']"
                />
                <q-select
                  v-model="login.tipo"
                  data_cy="login.tipo"
                  outlined
                  class="full-width"
                  clearable
                  option-label="tipo"
                  option-value="id"
                  :options="tipos"
                  :rules="[(val) => !!val || 'Informe o usuário']"
                  label="Tipo do usuário *"
                />

                <span class="full-width">
                  <q-radio
                    v-model="login.admin"
                    val="true"
                    label="Administrador"
                    data_cy="login.admin"
                  />
                </span>
                <span class="full-width">
                  <q-checkbox
                    label="Ativo"
                    v-model="login.ativar"
                    data_cy="login.ativar"
                    true-value="yes"
                    false-value="no"
                    :rules="[(val) => !!val || 'Informe o usuário']"
                  />
                </span>
              </q-form>
            </q-card-section>
            <q-card-actions>
              <q-space />
              <q-btn
                data_cy="login.limpar"
                @click="reset"
                label="Limpar"
                color="negative"
              />
              <q-btn
                data_cy="login.salvar"
                label="Salvar"
                color="primary"
                @click="save"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { useQuasar } from "quasar";
import { _notify } from "src/boot/helper";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const form_login = ref();
    const $q = useQuasar();
    const login = reactive({
      usuario: null,
      tipo: null,
      sexo: null,
      admin: null,
      ativar: "no",
    });
    const tipos = ref([
      {
        id: "1",
        tipo: "novato",
      },
      {
        id: "2",
        tipo: "veterano",
      },
    ]);

    /** actions */
    const save = async () => {
      try {
        const is_valid = await form_login.value.validate();
        if (!is_valid) {
          _notify({
            message: "Informe os campos obrigatórios.",
            color: "negative",
            position: "center",
            data_cy: "login.error",
          });

          return false;
        }

        _notify({
          message: "Cadastro concluido",
          color: "positive",
          position: "center",
          data_cy: "login.success",
        });
      } catch (error) {
        console.log(error);
      }
    };

    const reset = () => {
      form_login.value.resetValidation();

      login.usuario = null;
      login.tipo = null;
      login.sexo = null;
      login.admin = null;
      login.ativar = "no";
    };

    return { form_login, login, tipos, save, reset };
  },
});
</script>
