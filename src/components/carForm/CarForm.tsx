import {SubmitHandler, useForm} from "react-hook-form";
import {FC, useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import {carValidator} from "../../validators/car.validator";
import {IUseState} from "../../types/useState.type";

interface IProps {
    setAllCars: IUseState<boolean>;
    carForUpdate: ICar | null;
    setCarForUpdate: IUseState<ICar|null>
}

const CarForm: FC<IProps> = ({setAllCars, carForUpdate, setCarForUpdate}) => {
    const {reset, handleSubmit, register, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !="id") {
                    setValue(key as keyof ICar, value, {shouldValidate:true})
                }
            })
        }
    }, [carForUpdate]);

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        setAllCars(prev => !prev);
        reset()
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate!.id, car);
        setAllCars(prev => !prev);
        reset();
        setCarForUpdate(null)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type='text' placeholder={'brand'} {...register('brand')}/>
                <input type='number' placeholder={'year'} {...register('year')}/>
                <input type='number' placeholder={'price'} {...register('price')}/>
                <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
            <div>
                {errors.brand && <span>{errors.brand.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
            </div>
        </div>

    );
};

export {CarForm};