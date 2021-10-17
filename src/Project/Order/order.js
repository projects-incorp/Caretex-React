import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const OrderScreen =() => {
    const [value, setValue] = React.useState([new Date(), new Date()]);
    const [tab, setTab] = React.useState('1');

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    return( 
        <div className="w-full px-20 py-12 overflow-auto bg-gradient-to-br from-blizzard to-perfume bg-scroll font-body">
            <h1 className="text-4xl font-bold pb-6 px-6">Order History</h1>
            <TabContext value={tab}>
                <div className='flex justify-between px-6'>
                    <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                        <Tab label="All Order" value="1" className='font-semibold' />
                        <Tab label="Summary" value="2" className='font-semibold' />
                        <Tab label="Completed" value="3" className='font-semibold' />
                        <Tab label="Canceled" value="4" className='font-semibold' />
                    </TabList>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <DateRangePicker
                            startText="Start"
                            endText="End"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} size='small' />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} size='small' />
                            </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                </div>
                <TabPanel value="1">
                    <div className='flex flex-col'>
                        <div className='grid grid-cols-6 gap-4 text-center py-2 font-semibold bg-spindle w-full border-gray-400 border-2 rounded-xl'>
                            <h1 className='grid-col-1'>Id</h1>
                            <h1 className='grid-col-1'>Order</h1>
                            <h1 className='grid-col-1'>Type</h1>
                            <h1 className='grid-col-1'>Status</h1>
                            <h1 className='grid-col-1'>Total</h1>
                            <h1 className='grid-col-1'>Actions</h1>
                        </div>
                        <div className='grid grid-cols-6 items-center gap-4 text-center py-2 bg-spindle w-full border-gray-400 border-2 rounded-xl mt-3'>
                            <h1 className='grid-col-1'>#2242</h1>
                            <h1 className='grid-col-1'>Order Name</h1>
                            <h1 className='grid-col-1'>Delivery</h1>
                            <h1 className='grid-col-1'>Paid</h1>
                            <h1 className='grid-col-1'>$452</h1>
                            <h1 className='grid-col-1'>
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            </h1>
                        </div>
                        <div className='grid grid-cols-6 items-center gap-4 text-center py-2 bg-spindle w-full border-gray-400 border-2 rounded-xl mt-3'>
                            <h1 className='grid-col-1'>#2242</h1>
                            <h1 className='grid-col-1'>Order Name</h1>
                            <h1 className='grid-col-1'>Delivery</h1>
                            <h1 className='grid-col-1'>Paid</h1>
                            <h1 className='grid-col-1'>$452</h1>
                            <h1 className='grid-col-1'>
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            </h1>
                        </div>
                        <div className='grid grid-cols-6 items-center gap-4 text-center py-2 bg-spindle w-full border-gray-400 border-2 rounded-xl mt-3'>
                            <h1 className='grid-col-1'>#2242</h1>
                            <h1 className='grid-col-1'>Order Name</h1>
                            <h1 className='grid-col-1'>Delivery</h1>
                            <h1 className='grid-col-1'>Paid</h1>
                            <h1 className='grid-col-1'>$452</h1>
                            <h1 className='grid-col-1'>
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            </h1>
                        </div>
                        <div className='grid grid-cols-6 items-center gap-4 text-center py-2 bg-spindle w-full border-gray-400 border-2 rounded-xl mt-3'>
                            <h1 className='grid-col-1'>#2242</h1>
                            <h1 className='grid-col-1'>Order Name</h1>
                            <h1 className='grid-col-1'>Delivery</h1>
                            <h1 className='grid-col-1'>Paid</h1>
                            <h1 className='grid-col-1'>$452</h1>
                            <h1 className='grid-col-1'>
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            </h1>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="2">

                </TabPanel>
                <TabPanel value="3">

                </TabPanel>
                <TabPanel value="4">

                </TabPanel>
            </TabContext>
        </div>
    )
}