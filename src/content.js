import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Content = ({ items, handleCheckboxChange, handledelete }) => {
   
    
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <tr>
                            <td>
                        <input className="item1"
                            type="checkbox"
                            checked={item.checked}
                            onClick={() => handleCheckboxChange(item.id)}
                            
                        />̥
                        </td>
                        <td>

                        <label>{item.item}</label>
                        </td>
                        <td>
                        <FontAwesomeIcon icon={faTrash}
                        role='button'
                        tabIndex="0"
                        onClick={() =>  handledelete(item.id)}/>
                        </td>
                        </tr>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Content;
