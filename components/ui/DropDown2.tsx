"use client"
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo(props: any) {
    const [width, setWidth] = useState('70%');

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth <= 700) {
                setWidth('90%');
            } else {
                setWidth('70%');
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth)

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <Box className="w-full">
            <FormControl className="w-full">
                <InputLabel htmlFor="uncontrolled-native" className="text-[29px] text-black font-bold">
                    <p className="text-black text-[20px]">{props.name}</p>
                </InputLabel>
                <NativeSelect
                    inputProps={{
                        name: props.name,
                        id: 'uncontrolled-native',
                        'aria-label': props.name
                    }}
                    style={{
                        marginTop: '30px',
                        width: width, // Use dynamic width
                        borderRadius: '0px',
                    }}
                >
                    {props.options.map((option: any, index: any) => (
                        <option key={index} value={option.value} className="text-blue-400">
                            {option.label}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
