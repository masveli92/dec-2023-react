import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {carValidator} from "../../validators/car.validator";


const CarForm = ({setAllCars, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm( {mode:'all', resolver: joiResolver(carValidator)});

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand',carForUpdate.brand, {shouldValidate:true})
            setValue('price',carForUpdate.price, {shouldValidate:true})
            setValue('year',carForUpdate.year, {shouldValidate:true})

        }
    },[carForUpdate])

    const save = async (car) => {
       const {data} = await carService.create(car);
       setAllCars(prev=>!prev);
       reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate?.id, car);
        setAllCars(prev=>!prev);
        reset();
        setCarForUpdate(null)
    }



    return (
        // <form onSubmit={handleSubmit(carForUpdate?update:save)}>
        //
        //     <input type="text" placeholder={'brand'} {...register('brand', {
        //         pattern: {
        //             value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
        //             message: "this field must contain only letters, min-1, max-20"
        //         },
        //         required: {value:true, message: 'this field can`t be empty'}
        //     })}/>
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //
        //     <input type="text" placeholder={'price'} {...register('price', {
        //         valueAsNumber: true,
        //         min: {value: 0, message: 'min 0'},
        //         max: {value: 1000000, message: "max 1000000"},
        //         required: {value:true, message: 'this field can`t be empty'}
        //     })}/>
        //     {errors.price && <span>{errors.price.message}</span>}
        //
        //     <input type="text" placeholder={'year'} {...register('year', {
        //         valueAsNumber: true,
        //         min: {value: 1990, message: 'not older then 1990'},
        //         max: {value: new Date().getFullYear(), message: 'not younger then current year'},
        //         required: {value:true, message: 'this field can`t be empty'}
        //     })}/>
        //     {errors.year && <span>{errors.year.message}</span>}
        //
        //     <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
        //
        // </form>

        <form onSubmit={handleSubmit(carForUpdate?update:save)}>

            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>

        </form>
    );
};

export default CarForm;