import { useLocalStorage} from './useLocalStorage';
// write your custom hook here to control your checkout form

export const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue);

    //this hook uses the local storage to grab the values
    // and handles the changes to set those values
    const handleChanges = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
      };

      return [values, handleChanges];
}