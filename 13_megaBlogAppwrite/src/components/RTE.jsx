import React from 'react'
import { Editor} from '@tinymce/tinymce-react' 
import { Controller } from 'react-hook-form'



// control comes from react-hook-form
// it's responsible for transfering the state of RTE to react-hook-form
// it pass on control from this component to the component which needed
const RTE = ({ name, control, label, defaultValue = ''}) => {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller 
        name={name || 'content'}
            control={control} // called/control by parent component
            // render an element
            // tracking any field event i.e, if any changes occur in this field then render that component 
            render={({ field: {onChange}}) => (
                // rendering any element
                <Editor  
                    initialValue = { defaultValue } 
                    // what values are needed during the initialization
                    init={
                        {
                            branding: false,
                            height: 500,
                            menubar: ture,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }
                    }
                    // anything changes in the editor it's governed by onChange
                    onEditorChange={`onChange`}
                />
            )}
        />
    </div>
  )
}

export default RTE

