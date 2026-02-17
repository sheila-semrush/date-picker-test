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
import { Box, Flex } from '@semcore/base-components';
import React from 'react';
import Notice from '@semcore/notice';
import Divider from '@semcore/divider';
import Warning from '@semcore/icon/Warning/m';

const Demo = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [range, setRange] = React.useState([]);
  const rangeDays = (range[1] - range[0]) / 1000 / 60 / 60 / 24;
  const showWarning = rangeDays > 60;
  return (
    <>
      <h1>Welcome to the DatePicker testing page</h1>

      <Flex direction='column' alignItems='start' gap={2} mb={100}>
        <Text tag='label' size={300} htmlFor='date-picker-1' id='date-picker-1-label' mt={4}>
          Single date
        </Text>
        <DatePicker size='l' disabled={[[tomorrow, false]]}>
          <DatePicker.Trigger id='date-picker-1' />
          <DatePicker.Popper aria-labelledby='date-picker-1-label' />
        </DatePicker>

        <Text tag='label' size={300} htmlFor='date-picker-2' id='date-picker-2-label' mt={4}>
          Date range
        </Text>
        <DateRangePicker value={range} onChange={(date: any) => setRange(date)} disabled={[[tomorrow, false]]}>
          <DateRangePicker.Trigger size='l' id='date-picker-2' />
          <DateRangePicker.Popper
            p={0}
            aria-labelledby='date-picker-2-label'
            aria-describedby={showWarning ? 'warning' : undefined}
          >
            <Flex my={4} ml={4}>
              <Flex gap={4}>
                <Box>
                  <DateRangePicker.Header>
                    <DateRangePicker.Prev />
                    <DateRangePicker.Title />
                  </DateRangePicker.Header>
                  <DateRangePicker.Calendar />
                </Box>
                <Box>
                  <DateRangePicker.Header>
                    <DateRangePicker.Title />
                    <DateRangePicker.Next />
                  </DateRangePicker.Header>
                  <DateRangePicker.Calendar />
                </Box>
              </Flex>
              <Divider m='-16px 16px' orientation='vertical' />
              <Flex direction='column' justifyContent='space-between' mr={4}>
                <DateRangePicker.Period />
                <Flex mt={2} gap={2}>
                  <DateRangePicker.Apply />
                  <DateRangePicker.Reset />
                </Flex>
              </Flex>
            </Flex>
            {showWarning && (
              <Notice
                id='warning'
                theme='warning'
                aria-label={undefined}
                role={undefined}
                px={4}
                py={3}
                style={{
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderRadius: '0 0 6px 6px',
                }}
              >
                <Notice.Label tag={Warning} aria-hidden={false} aria-label='Warning: ' role='img' />
                <Notice.Text>Currently, data can be displayed for no more than 60 days.</Notice.Text>
              </Notice>
            )}
          </DateRangePicker.Popper>
        </DateRangePicker>

        <Text tag='label' size={300} htmlFor='date-picker-3' id='date-picker-3-label' mt={4}>
          Single month
        </Text>
        <MonthPicker size='l'>
          <MonthPicker.Trigger id='date-picker-3' />
          <MonthPicker.Popper aria-labelledby='date-picker-3-label' />
        </MonthPicker>

        <Text tag='label' size={300} htmlFor='date-picker-4' id='date-picker-4-label' mt={4}>
          Month range
        </Text>
        <MonthRangePicker>
          <MonthRangePicker.Trigger size='l' id='date-picker-4' />
          <MonthRangePicker.Popper aria-labelledby='date-picker-4-label' />
        </MonthRangePicker>

        <DateRangeComparator>
          <DateRangeComparator.Trigger size='l' placeholder='Compare date ranges' mt={4} />
          <DateRangeComparator.Popper aria-label='Compare date ranges' />
        </DateRangeComparator>

        <MonthDateRangeComparator>
          <MonthDateRangeComparator.Trigger size='l' placeholder='Compare month ranges' mt={4} />
          <MonthDateRangeComparator.Popper aria-label='Compare month ranges' />
        </MonthDateRangeComparator>
      </Flex>
    </>
  );
};

export default Demo;
