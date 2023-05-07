<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

const props = defineProps<{ modelValue: string; height?: number }>();

const emit = defineEmits(['update:modelValue']);

const textActions = [
  { slug: 'bold', icon: 'ic:twotone-format-bold', active: 'bold' },
  { slug: 'italic', icon: 'ic:twotone-format-italic', active: 'italic' },
  { slug: 'underline', icon: 'ic:twotone-format-underlined', active: 'underline' },
  { slug: 'strike', icon: 'ic:twotone-strikethrough-s', active: 'strike' },
  {
    slug: 'align',
    option: 'left',
    icon: 'ic:twotone-format-align-left',
    active: { textAlign: 'left' },
  },
  {
    slug: 'align',
    option: 'center',
    icon: 'ic:twotone-format-align-center',
    active: { textAlign: 'center' },
  },
  {
    slug: 'align',
    option: 'right',
    icon: 'ic:twotone-format-align-right',
    active: { textAlign: 'right' },
  },
  {
    slug: 'align',
    option: 'justify',
    icon: 'ic:twotone-format-align-justify',
    active: { textAlign: 'justify' },
  },

  { slug: 'clear', icon: 'ic:twotone-format-clear', active: 'clear' },
];

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Underline,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
  ],
  onUpdate,
  editorProps: {
    attributes: {
      class: `prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto p-4 bg-slate-100 rounded-b-lg focus:outline-none ${
        props.height ? `min-h-[${props.height}px]` : ''
      }`,
    },
  },
});

watch(
  () => props.modelValue,
  (value) => {
    // console.log('WATCH');
    if (editor.value.getHTML() === value) return;

    // JSON
    // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

    console.log('UPDATE');
    editor.value.commands.setContent(value, false);
  }
);

function onUpdate() {
  emit('update:modelValue', editor.value.getHTML());
}

function onActionClick(slug: string, option: string) {
  const vm = editor.value.chain().focus();
  const actionTriggers = {
    bold: () => vm.toggleBold().run(),
    italic: () => vm.toggleItalic().run(),
    underline: () => vm.toggleUnderline().run(),
    strike: () => vm.toggleStrike().run(),
    align: () => vm.setTextAlign(option).run(),
    clear: () => {
      vm.clearNodes().run();
      vm.unsetAllMarks().run();
    },
  };
  console.log(slug, option);

  actionTriggers[slug]();
}

function isActive(option) {
  return editor.value?.isActive(option);
}
</script>

<template>
  <div class="flex gap-2 border border-slate-300 p-2 rounded-t-xl">
    <button
      v-for="{ slug, option, active, icon } in textActions"
      type="button"
      :class="[isActive(active) ? 'opacity-100' : 'opacity-40']"
      @click="onActionClick(slug, option)"
    >
      <Icon :name="icon" class="text-xl" />
    </button>
  </div>
  <editor-content
    :editor="editor"
    class="border border-t-0 border-slate-300 rounded-b-lg"
  />
</template>