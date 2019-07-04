import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div >
            <p className ='f4'>
            {'This will detect faces in your pictures. Give it a shot?'}
            </p>
            <div className='center'>
                <div className ='form center pa4 b3 shadow-5'>
                <input className ='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                <button className ='w-30 grow f4 link ph3 pv2 dib white bg-orange' 
                onClick={onButtonSubmit}
                >Detect</button> 
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;