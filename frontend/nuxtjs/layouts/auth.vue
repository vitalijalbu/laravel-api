<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div v-if="(icon || $slots.icon) || (title || $slots.title) || (description || $slots.description)" :class="ui.base">
      <div v-if="icon || $slots.icon" :class="ui.icon.wrapper">
        <slot name="icon">
          <UIcon :name="(icon as string)" :class="ui.icon.base" />
        </slot>
      </div>

      <div v-if="title || $slots.title" :class="ui.title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>

      <div v-if="description || $slots.description" :class="ui.description">
        <slot name="description">
          {{ description }}
        </slot>
      </div>
    </div>

    <div :class="ui.container">
      <div v-if="providers?.length" :class="ui.providers">
        <UButton v-for="(provider, index) in providers" :key="index" v-bind="provider" block @click="provider.click" />
      </div>

      <UDivider v-if="providers?.length && fields?.length" :label="divider" />

      <UForm
        v-if="fields?.length"
        ref="formRef"
        :state="state"
        :schema="schema"
        :validate="validate"
        :validate-on="validateOn"
        :class="ui.form"
        @submit="$emit('submit', $event.data)"
      >
        <UFormGroup
          v-for="field in fields"
          :key="field.name"
          :label="field.type === 'checkbox' ? '' : field.label ?? ''"
          :description="field.description"
          :help="field.help"
          :hint="field.hint"
          :name="field.name"
          :size="field.size"
        >
          <slot :name="`${field.name}-field`" v-bind="{ state, field: omit(field, ['description', 'help', 'hint', 'size']) }">
            <UCheckbox v-if="field.type === 'checkbox'" v-model="state[field.name]" v-bind="omit(field, ['description', 'help', 'hint', 'size'])" />
            <USelectMenu v-else-if="field.type === 'select'" v-model="state[field.name]" v-bind="omit(field, ['description', 'help', 'hint', 'size'])" />
            <UInput
              v-else-if="field.type === 'password'"
              v-model="state[field.name]"
              :type="passwordVisibility ? 'text' : 'password'"
              v-bind="omit(field, ['label', 'description', 'help', 'hint', 'size', 'type'])"
              :ui="{ icon: { trailing: { pointer: '' } } }"
            >
              <template v-if="passwordToggle" #trailing>
                <UButton
                  v-bind="{ ...ui.default.passwordToggle, ...passwordToggle }"
                  :icon="passwordVisibility ? ui.passwordToggle.hideIcon : ui.passwordToggle.showIcon"
                  :padded="false"
                  @click="togglePasswordVisibility"
                />
              </template>
            </UInput>
            <UInput v-else v-model="state[field.name]" v-bind="omit(field, ['label', 'description', 'help', 'hint', 'size'])" />
          </slot>
          <template v-if="$slots[`${field.name}-label`]" #label>
            <slot :name="`${field.name}-label`" />
          </template>
          <template v-if="$slots[`${field.name}-description`]" #description>
            <slot :name="`${field.name}-description`" />
          </template>
          <template v-if="$slots[`${field.name}-hint`]" #hint>
            <slot :name="`${field.name}-hint`" />
          </template>
          <template v-if="$slots[`${field.name}-help`]" #help>
            <slot :name="`${field.name}-help`" />
          </template>
          <template v-if="$slots[`${field.name}-error`]" #error>
            <slot :name="`${field.name}-error`" />
          </template>
        </UFormGroup>

        <slot name="validation" />

        <UButton type="submit" block :loading="loading" v-bind="{ ...ui.default.submitButton, ...submitButton }" />
      </UForm>
    </div>

    <div v-if="$slots.footer" :class="ui.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { PropType } from 'vue'
import { twJoin } from 'tailwind-merge'
import { omit } from '#ui/utils'
import type { Button, ButtonColor, ButtonVariant, FormError, FormEventType, FormGroupSize, DeepPartial } from '#ui/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  icon: {
    type: String,
    default: undefined
  },
  align: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'bottom'
  },
  loading: {
    type: Boolean,
    default: false
  },
  fields: {
    type: Array as PropType<{
      name: string
      type: string
      label: string
      description?: string
      help?: string
      hint?: string
      size?: FormGroupSize
      placeholder?: string
      required?: boolean
      value?: string | number
      readonly?: boolean
    }[]>,
    default: () => []
  },
  providers: {
    type: Array as PropType<(Button & { click?: (...args: any[]) => void })[]>,
    default: () => []
  },
  submitButton: {
    type: Object as PropType<Button>,
    default: () => ({})
  },
  passwordToggle: {
    type: Object as PropType<Button>,
    default: () => ({})
  },
  schema: {
    type: Object as PropType<any>,
    default: undefined
  },
  validate: {
    type: [Function, Array] as PropType<((state: any) => Promise<FormError[]>) | ((state: any) => FormError[])>,
    default: undefined
  },
  validateOn: {
    type: Array as PropType<FormEventType[]>,
    default: () => ['submit']
  },
  divider: {
    type: String,
    default: 'or'
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  },
  ui: {
    type: Object as PropType<DeepPartial<typeof config.value>>,
    default: () => ({})
  }
})

defineEmits(['submit'])

const config = computed(() => {
  const container: string = twJoin(
    'gap-y-6 flex flex-col',
    props.align === 'top' && 'flex-col-reverse'
  )

  return {
    wrapper: 'w-full max-w-sm space-y-6',
    base: '',
    container,
    title: 'text-2xl text-gray-900 dark:text-white font-bold',
    description: 'text-gray-500 dark:text-gray-400 mt-1',
    icon: {
      wrapper: 'mb-2 pointer-events-none',
      base: 'w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
    },
    providers: 'space-y-3',
    form: 'space-y-6',
    footer: 'text-sm text-gray-500 dark:text-gray-400 mt-2',
    passwordToggle: {
      showIcon: 'i-heroicons-eye',
      hideIcon: 'i-heroicons-eye-slash'
    },
    default: {
      submitButton: {
        label: 'Continue'
      },
      passwordToggle: {
        color: 'gray' as ButtonColor,
        variant: 'link' as ButtonVariant
      }
    }
  }
})

const formRef = ref<HTMLElement>()

const { ui, attrs } = useUI('auth.form', toRef(props, 'ui'), config, toRef(props, 'class'), true)

const state = reactive(Object.values(props.fields).reduce((acc, { name, value }) => {
  acc[name] = value
  return acc
}, {} as Record<string, any>))

const passwordVisibility = ref(false)

function togglePasswordVisibility() {
  passwordVisibility.value = !passwordVisibility.value
}

// Expose

defineExpose({
  formRef,
  state
})
</script>
