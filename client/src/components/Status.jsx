import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import CodeHighlight from '../components/Highlight';
import Select from 'react-select';
import { setPageTitle } from '../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
// import IconBell from '../components/Icon/IconBell';
// import IconCode from '../../../components/Icon/IconCode';

const Status = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Select2'));
    });
    const [codeArr, setCodeArr] = useState([]);

    const toggleCode = (name) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    const options = [
        { value: 'Open', label: 'Open' },
        { value: 'Close', label: 'Close' },
        { value: 'Shortlisted', label: 'Shortlisted' },
    ];

    return (
        <div>
            <div className="pt-5 space-y-8 ">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 custom-select  ">
                    {/* <!-- Basic --> */}
                    <div className=" flex flex-row   gap-10 " id="basic">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Status</h5>
                        </div>
                        <div className="mb-5 ">
                            <Select
                                defaultValue={options[0]}
                                options={options}
                                isSearchable={false}
                                styles={{
                                    menu: provided => ({ ...provided, zIndex: "9999" }),
                                    menuPortal: provided => ({ ...provided, zIndex: "9999" })
                                }}
                                menuPortalTarget={document.body}
                            />
                        </div>
                        {codeArr.includes('code1') && (
                            <CodeHighlight>

                            </CodeHighlight>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Status;