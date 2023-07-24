import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;
const library_widget_config = {
  cloud_name: "dmparrmdk",
  api_key: "353997448357236",
  remove_header: false,
  max_files: "1",
  insert_caption: "Insert",
  default_transformations: [[]],
  button_class: "myBtn",
  button_caption: "Select Image",
};

let libraryWidget = null;
console.log("🚀 ~ file: Plugin.ts:17 ~ libraryWidget:", libraryWidget)
let editorInstance = null;
const onSelectFromGallery = (response) =>  {
  console.log("🚀 ~ file: Plugin.ts:19 ~ onSelectFromGallery ~ response:", response)
  if( response && response.assets.length ){
    response.assets.forEach( ( asset ) => {
      if( asset.resource_type === 'image'){
        editorInstance.insertContent(`<img src=${asset.url}>`, { format : 'html'});
      }else if( asset.resource_type === 'video'){
        editorInstance.insertContent(`<video controls>
        <source src=${asset.url} type=video/${asset.format}>
        Your browser does not support the video tag.
        </video>`);
      }
    });

  }
    
  
};

      tinymce.ScriptLoader.loadScript('https://media-library.cloudinary.com/global/all.js').then( () => {
        console.log('script loaded');

        libraryWidget = cloudinary.createMediaLibrary(
          library_widget_config,{
                insertHandler: onSelectFromGallery,
          }
      );

      });

    

    
const setup = (editor: Editor, url: string): void => {
  console.log("🚀 ~ file: Plugin.ts:46 ~ setup ~ url:", url)
  editorInstance = editor;
  editor.ui.registry.addButton('cloudinary', {
    icon : 'gallery',
    tooltip : 'Cloudinary Library',
    onAction: () => {
      libraryWidget.show();
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('cloudinary', setup);
};
