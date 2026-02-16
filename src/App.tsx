import {
  DatePicker,
  DateRangeComparator,
  DateRangePicker,
  MonthDateRangeComparator,
  MonthPicker,
  MonthRangePicker,
} from '@semcore/date-picker';
import { Text } from '@semcore/typography';
import './App.css';
import { Flex } from '@semcore/base-components';

const Demo = () => {
  return (
    <>
      <h1>Welcome to the DatePicker testing page</h1>

      <Flex direction='column' alignItems='start' gap={2}>
        <Text tag='label' size={300} htmlFor='date-picker-1' mt={4}>
          Single date
        </Text>
        <DatePicker size='l' disabled={[[new Date(), false]]}>
          <DatePicker.Trigger id='date-picker-1' />
          <DatePicker.Popper />
        </DatePicker>

        <Text tag='label' size={300} htmlFor='date-picker-2' mt={4}>
          Date range
        </Text>
        <DateRangePicker disabled={[[new Date(), false]]}>
          <DateRangePicker.Trigger size='l' id='date-picker-2' />
          <DateRangePicker.Popper />
        </DateRangePicker>

        <Text tag='label' size={300} htmlFor='date-picker-3' mt={4}>
          Single month
        </Text>
        <MonthPicker size='l'>
          <MonthPicker.Trigger id='date-picker-3' />
          <MonthPicker.Popper />
        </MonthPicker>

        <Text tag='label' size={300} htmlFor='date-picker-4' mt={4}>
          Month range
        </Text>
        <MonthRangePicker>
          <MonthRangePicker.Trigger size='l' id='date-picker-4' />
          <MonthRangePicker.Popper />
        </MonthRangePicker>

        <DateRangeComparator>
          <DateRangeComparator.Trigger size='l' placeholder='Compare date ranges' mt={4} />
          <DateRangeComparator.Popper />
        </DateRangeComparator>

        <MonthDateRangeComparator>
          <MonthDateRangeComparator.Trigger size='l' placeholder='Compare month ranges' mt={4} />
          <MonthDateRangeComparator.Popper />
        </MonthDateRangeComparator>
      </Flex>
    </>
  );
};

export default Demo;
