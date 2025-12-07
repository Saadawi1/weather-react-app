import React from 'react'
import { useState } from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {AsyncPaginate} from "react-select-async-paginate";
import {Geo_Api_Url, geoApiOptions} from '../Api.jsx';
export default function Search({onSearchChange ,onLoading}) {
    // قيمة البحث داخل الـ TextField
  const [inputValue, setInputValue] = useState(null);
    // دالة لتحميل الخيارات بناءً على قيمة البحث
    const loadOptions = (inputValue) => {
        if(inputValue.length > 0 ){
            onLoading(true);
        }
        return fetch(`${Geo_Api_Url}?minPopulation=100000&namePrefix=${inputValue}` , geoApiOptions)
        .then( (response) => response.json())
        .then((response) =>{
             if (!response.data) return { options: [] };
            // تحويل البيانات إلى الشكل المطلوب للـ AsyncPaginate
            // كل عنصر يجب أن يكون كائن يحتوي على value و label
            // value هو إحداثيات المدينة، و label هو اسم المدينة ورمز الدولة
            // هنا نستخدم latitude و longitude كـ value و name و countryCode كـ label
            return{
                options: response.data.map((city)=>{
                    return{
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    }
                })
            }
        }).catch((err)=> {
        console.log(err); 
        return {options: [] };
    } 
);
    }
    const handelOnChange=(searchData)=>{
        onLoading(false);
        setInputValue(searchData);
        onSearchChange(searchData);
    }
  return (<>
    <AsyncPaginate 
        value={inputValue}
        placeholder="Search for city"
        debounceTimeout={600}
        onChange={handelOnChange}
        loadOptions={loadOptions}
    />
  </>
  )
}
