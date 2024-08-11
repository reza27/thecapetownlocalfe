import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useEffect, useMemo, useState } from "react";
import { useCountries } from "use-react-countries";

export const TCTLCountryCodeMobileNumberInput = (props) => {
  const { countries } = useCountries();
  const [countryCodes, setCountryCodes] = useState(countries);

  const SOUTH_AFRICA = 204;

  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countryCodes[country];

  useEffect(() => {
    setCountry(SOUTH_AFRICA);
    const sortedCountryCodes = [...countryCodes];
    sortedCountryCodes.sort((a, b) => (a.name > b.name ? 1 : -1));
    setCountryCodes(sortedCountryCodes);
  }, []);

  useEffect(() => {
    console.log("props", props);

    props.onCountryCodeChange(countryCallingCode);
  }, [country]);

  const displayCountries = useMemo(() => {
    return countryCodes.map(({ name, flags, countryCallingCode }, index) => {
      return (
        <MenuItem
          key={name}
          value={name}
          className="flex items-center gap-2"
          onClick={() => setCountry(index)}
        >
          <img
            src={flags.svg}
            alt={name}
            className="h-5 w-5 rounded-full object-cover"
          />
          {name} <span className="ml-auto">{countryCallingCode}</span>
        </MenuItem>
      );
    });
  }, [country, countryCodes]);
  return (
    <div className="relative flex w-full">
      <Menu placement="bottom-start relative">
        <MenuHandler>
          <Button
            ripple={false}
            id="countryCode"
            variant="text"
            color="blue-gray"
            className="flex h-11 items-center gap-2 rounded-r-none border-b border-blue-gray-200  pl-3"
          >
            <img
              src={flags.svg}
              alt={name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>

        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {displayCountries}
        </MenuList>
      </Menu>
      <Input
        autoComplete="off"
        type="tel"
        variant="standard"
        color="light-blue"
        label="Mobile number*"
        {...props}
        className="input-field country-input"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
};
