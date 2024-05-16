const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    plugins: ['grapesjs-preset-newsletter', 'grapesjs-plugin-ckeditor'],
    pluginsOpts: {
      'grapesjs-preset-newsletter': {
        modalLabelImport: 'Paste all your code here below and click import',
        modalLabelExport: 'Copy the code and use it wherever you want',
        codeViewerTheme: 'material',
        importPlaceholder: '<table class="table"><tr><td class="cell">Hello world!</td></tr></table>',
        cellStyle: {
          'font-size': '12px',
          'font-weight': 300,
          'vertical-align': 'top',
          color: 'rgb(111, 119, 125)',
          margin: 0,
          padding: 0,
        }
      },
      'grapesjs-plugin-ckeditor': {
        onToolbar: el => {
          el.style.minWidth = '350px';
        },
        options: {
          startupFocus: true,
          extraAllowedContent: '*(*);*{*}', // Allows any class and any inline style
          allowedContent: true, // Disable auto-formatting, class removing, etc.
          enterMode: 2, // CKEDITOR.ENTER_BR,
          extraPlugins: 'sharedspace,justify,colorbutton,panelbutton,font',
          toolbar: [
            { name: 'styles', items: ['Font', 'FontSize' ] },
            ['Bold', 'Italic', 'Underline', 'Strike'],
            {name: 'paragraph', items : [ 'NumberedList', 'BulletedList']},
            {name: 'links', items: ['Link', 'Unlink']},
            {name: 'colors', items: [ 'TextColor', 'BGColor' ]},
          ],
        }
      }
    },
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '900px',
    width: 'auto',
    // Disable the storage manager for the moment
   
    
  });
  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'visibility',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: '<u>B</u>',
        command: 'sw-visibility', // Built-in command
      }, 
     {
        id: 'save-db',
        className: 'fa fa-floppy icon-floppy',
        command: 'save-db',
        attributes: {
            title: 'Save DB'
        }
      }, {
        id: 'export',
        className: 'btn-open-export',
        label: 'Exp',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      }, {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'JSON',
        context: 'show-json',
        command(editor) {
          editor.Modal.setTitle('Components JSON')
            .setContent(`<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`)
            .open();
        },
      }
    ],
  });
  const previewBtn = document.getElementById('previewBtn');
const previewContainer = document.getElementById('previewContainer');

previewBtn.addEventListener('click', () => {
    const htmlContent = editor.getHtml(); // Get the HTML content from the editor
    previewContainer.innerHTML = htmlContent; // Display the HTML content in the preview container
});