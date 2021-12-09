import { ChangeEvent, useState } from 'react';

export function useFormInput(initialValue = '', onChangeAction?: (value: number) => void) {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: ChangeEvent<HTMLInputElement> | string) => {
        const newValue = typeof e === 'string' ? e : e.target.value
        setValue(newValue)
        if(onChangeAction) {
            // onChangeAction(newValue);
        }
	};

	return { value, onChange};
}
