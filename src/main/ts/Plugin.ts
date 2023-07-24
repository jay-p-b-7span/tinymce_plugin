import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('cloudinary', {
    text: 'cloudinary button',
    onAction: () => {
      editor.setContent('<p>content added from cloudinary</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('cloudinary', setup);
};
