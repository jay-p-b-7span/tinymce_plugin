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
// let editorInstance = null;


const setup = (editor: Editor, url: string): void => {
  // console.log("🚀 ~ file: Plugin.ts:62 ~ setup ~ editor:", editor)
  // console.log("🚀 ~ file: Plugin.ts:46 ~ setup ~ url:", url)
  // editorInstance = editor;

  console.log('window', window)
  



  tinymce.ScriptLoader.loadScript('https://media-library.cloudinary.com/global/all.js').then( () => {

  const onSelectFromGallery = (response) =>  {
  
    // console.log("🚀 ~ file: Plugin.ts:19 ~ onSelectFromGallery ~ response:", response)
    // console.log('active editor', tinymce.EditorManager.activeEditor);
    console.log('editor Instance', editor );
    
    // const editorInstance = editor;
    if( response && response.assets.length ){
      response.assets.forEach( ( asset ) => {
        console.log('asset-->', asset );
  
        
        if( asset.resource_type === 'image'){
          
          tinymce.EditorManager.activeEditor.insertContent(`<img src=${asset.url}>`, { format : 'html'});
        }else if( asset.resource_type === 'video'){
          tinymce.EditorManager.activeEditor.insertContent(`<video controls>
          <source src=${asset.url} type=video/${asset.format}>
          Your browser does not support the video tag.
          </video>`);
        }
      });
  
    }
      
    
  };

        console.log('script loaded');
        // @ts-ignore
        libraryWidget = cloudinary.createMediaLibrary(
          // @ts-ignore
          library_widget_config,{
                insertHandler: onSelectFromGallery,
          }
      );

      }).catch( ( error ) => {
        console.log("🚀 ~ file: Plugin.ts:66 ~ tinymce.ScriptLoader.loadScript ~ error:", error)
        
      });

  editor.ui.registry.addButton('cloudinary', {
    icon : 'gallery',
    tooltip : 'Cloudinary Library',
    onAction: () => {
      libraryWidget.show();
    }
  });
};

export default (): void => {
  console.log('tinymce ************', tinymce);
  tinymce.PluginManager.add('cloudinary', setup);
};
