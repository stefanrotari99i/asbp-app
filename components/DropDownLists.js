
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react'

export const DropDownCurency = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'EUR', value: 'eur'},
    {label: 'USD', value: 'usd'},
    {label: 'GBP', value: 'gbp'},
    {label: 'RON', value: 'ron'},
    {label: 'MDL', value: 'mdl'},
    {label: 'UAH', value: 'uah'},
    {label: 'CHF', value: 'chf'},
    {label: 'RUB', value: 'rub'}
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={'Select'}
      containerStyle={{
        backgroundColor: '#1a1a1a',
        width: '25%',
      }}
      style={{
        backgroundColor: '#1a1a1a',
        borderWidth: 0,
        borderRadius: 0,
        borderLeftColor: 'rgba(255,255,255, .5)',
        borderLeftWidth: .2,
      }}
      labelStyle={{
        color: '#fff',
        fontWeight: '700'
      }}

      zIndex={2}
    />
  );
}