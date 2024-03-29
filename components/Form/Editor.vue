<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';

interface TextActions {
  slug: string;
  icon: string;
  option?: string;
  active: string | { textAlign: string };
}

const props = defineProps<{ modelValue: string; height?: number }>();

const emit = defineEmits(['update:modelValue']);

const textActions: Array<TextActions[]> = [
  [
    { slug: 'bold', icon: 'ic:twotone-format-bold', active: 'bold' },
    { slug: 'italic', icon: 'ic:twotone-format-italic', active: 'italic' },
    { slug: 'underline', icon: 'ic:twotone-format-underlined', active: 'underline' },
    { slug: 'strike', icon: 'ic:twotone-strikethrough-s', active: 'strike' },
  ],
  [
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
  ],
  [
    { slug: 'bulletList', icon: 'ic:twotone-format-list-bulleted', active: 'bulletList' },
    { slug: 'orderedList', icon: 'ic:twotone-format-list-numbered', active: 'orderedList' },
  ],
  [{ slug: 'clear', icon: 'ic:twotone-format-clear', active: 'clear' }],
  [{ slug: 'link', icon: 'ic:baseline-insert-link', active: 'link' }],
];

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Underline,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Link.configure({
      openOnClick: false,
    }),
  ],
  onUpdate,
  editorProps: {
    attributes: {
      class: 'prose max-w-none prose-sm sm:prose sm:max-w-none p-4 bg-slate-100 rounded-b-lg focus:outline-none',
      style: `min-height: ${props.height}px;`,
    },
  },
});

watch(
  () => props.modelValue,
  (value) => {
    if (editor.value?.getHTML() === value) return;
    // JSON
    // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)
    editor.value?.commands.setContent(value, false);
  }
);

function onUpdate() {
  emit('update:modelValue', editor.value?.getHTML());
}

function onActionClick(slug: TextActions['slug'], option: TextActions['option']) {
  const vm = editor.value?.chain().focus();
  const actionTriggers: any = {
    bold: () => vm?.toggleBold().run(),
    italic: () => vm?.toggleItalic().run(),
    underline: () => vm?.toggleUnderline().run(),
    strike: () => vm?.toggleStrike().run(),
    align: () => vm?.setTextAlign(option || '').run(),
    bulletList: () => vm?.toggleBulletList().run(),
    orderedList: () => vm?.toggleOrderedList().run(),
    clear: () => {
      vm?.clearNodes().run();
      vm?.unsetAllMarks().run();
    },
    link: () => setLink(),
  };
  actionTriggers[slug]();
}

function isActive(option: TextActions['active']) {
  return editor.value?.isActive(option);
}

function setLink() {
  const previousUrl = editor.value?.getAttributes('link').href;
  const url = window.prompt('URL', previousUrl);

  if (url === null) return;
  if (url === '') return editor.value?.chain().focus().extendMarkRange('link').unsetLink().run();
  editor.value?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
}
</script>

<template>
  <div class="flex gap-2 border border-slate-300 p-2 rounded-t-lg">
    <div v-for="(group, index) in textActions" :key="index" class="flex gap-2 border-r border-slate-300">
      <button
        v-for="{ slug, option, active, icon } in group"
        type="button"
        :class="['last:mr-2', isActive(active) ? 'opacity-100' : 'opacity-40']"
        @click="onActionClick(slug, option)"
      >
        <Icon :name="icon" class="text-xl" />
      </button>
    </div>
  </div>
  <editor-content :editor="editor" class="border border-t-0 border-slate-300 rounded-b-lg" />
</template>
