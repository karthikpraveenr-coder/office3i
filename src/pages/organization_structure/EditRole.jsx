import React, { useEffect } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import './css/AddRolestyle.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const EditRole = () => {


    // ------------------------------------------------------------------------------------------------

    const { id } = useParams();

    //  Retrieve customerData from local storage
    const customerData = JSON.parse(localStorage.getItem('customerData'));
    const officialuseremail = customerData?.officialuseremail || '';
    const useremail = customerData?.useremail || '';
    const userrole = customerData?.userrole || '';

    const usertoken = customerData?.token || '';
    const userempid = customerData?.userempid || '';
    // loading state
    const [loading, setLoading] = useState(true);

    // ------------------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------------------

    // Redirect to the edit page
    const navigate = useNavigate();

    const GoTorolelist = () => {
        navigate(`/admin/rolelist`);
    };


    // ------------------------------------------------------------------------------------------------

    const [checkedNames, setCheckedNames] = useState({
        'Dashboard': [],

        'EmployeeManagement': {
            'ORGStructure': [],
            'LeaveAndAttendancePolicy': [],
            'CompanyPolicy': [],
            'Employee': [],

            'Template': {
                'OfferLetter': [],
                'AppointmentLetter': [],
                'RelievingLetter': [],
            }
        },

        'Attendance': [],
        'HRSupport': [],
        'TLApproval': [],
        'HelpDesk': [],
        'Assets': [],

        'TeamManagement': {
            'Events': {
                'AddEvent': [],
                'EventList': [],
            },
            'Meeting': {
                'AddMeeting': [],
                'MeetingList': [],
            },
            'TeamTask': {
                'AddProject': [],
                'ProjectList': [],
                'AddTask': [],
                'TaskList': [],
                'AssignedTask': [],
                'TLAssignedTask': [],
            }
        },

        'Payroll': [],
        'Holiday': [],
        'Visitiormanagement': [],
        'Logs': [],

        'Recruitment': {
            'PostJob': [],
            'ListJob': [],
            'InboxResume': [],
            'CandidateTracker': {
                'AddResume': [],
                'CandidateStatus': [],
            },
            'SearchResume': [],
        },
        'Accounts': {
            'GoodsandServices': [],
            'CompanyDetails': {
                'AddCompany': [],
                'CompanyList': [],
            },
            'Purchase': {
                'AddPurchase': [],
                'PurchaseList': [],
            },
            'Sales': {
                'AddSales': [],
                'SalesList': [],
            },
            'DailyAccounts': [],
        },
        'SalesManagement': {
            'Lead': {
                'EnquiryList': [],
                'AddLead': [],
                'LeadList': [],
            },
            'PreSales': {
                'EnquiryList': [],
                'LeadList': [],
                'AddLead': [],
            },
            'Sales': {
                'LeadList': [],
            }

        },
    });

    // console.log("checkedNames.Dashboard:", checkedNames.Dashboard);
    // console.log("checkedNames:", checkedNames);



    // const handleCheckboxChange = (event) => {
    //     const { value, checked, name } = event.target;
    //     setCheckedNames(prevState => ({
    //         ...prevState,
    //         [name]: checked ? [...(prevState[name] || []), value] : (prevState[name] ? prevState[name].filter(item => item !== value) : [])
    //     }));
    // };

    const handlesingleCheckboxChange = (event) => {
        const { value, checked, name } = event.target;
        setCheckedNames(prevState => ({
            ...prevState,
            [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)
        }));
    };

    const handleCheckboxChange = (event) => {
        const { value, checked, name, dataset } = event.target;
        const category = dataset.category;
        const subCategory = dataset.subCategory;

        setCheckedNames(prevState => {
            // If it's within a subcategory (e.g., Template)
            if (subCategory) {
                return {
                    ...prevState,
                    [category]: {
                        ...prevState[category],
                        [subCategory]: {
                            ...prevState[category][subCategory],
                            [name]: checked ? [...prevState[category][subCategory][name], value] : prevState[category][subCategory][name].filter(item => item !== value)
                        }
                    }
                };
            }

            // Otherwise, update the main category
            return {
                ...prevState,
                [category]: {
                    ...prevState[category],
                    [name]: checked ? [...prevState[category][name], value] : prevState[category][name].filter(item => item !== value)
                }
            };
        });
    };







    const [role, setRole] = useState('');

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };



    // console.log(checkedNames);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!role) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Enter The Role Name',
            });
            return;
        }

        try {
            const response = await axios.put(
                'https://office3i.com/api/public/api/update_role',
                {
                    id: id,
                    role_name: role,
                    permission: checkedNames,
                    updated_by: userempid,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${usertoken}`,
                        'Registered-Email': officialuseremail
                    },
                }
            );
            // console.log(response.data);

            if (response.data.status === 'success') {

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: response.data.message,
                });
                GoTorolelist()
            } else if(response.data.status === 'error')  {

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.data.message,
                });
            }
        } catch (error) {
            // Handle errors
            console.error('Error:', error);


            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while adding role.',
            });
        }
    };


    const handleCancel = () => {

        console.log('Form canceled');

        // setCheckedNames({
        //     'Dashboard': [],

        //     'EmployeeManagement': {
        //         'ORGStructure': [],
        //         'LeaveAndAttendancePolicy': [],
        //         'CompanyPolicy': [],
        //         'Employee': [],

        //         'Template': {
        //             'OfferLetter': [],
        //             'AppointmentLetter': [],
        //             'RelievingLetter': [],
        //         }
        //     },

        //     'Attendance': [],
        //     'HRSupport': [],
        //     'TLApproval': [],
        //     'HelpDesk': [],
        //     'Assets': [],

        //     'TeamManagement': {
        //         'Events': {
        //             'AddEvent': [],
        //             'EventList': [],
        //         },
        //         'Meeting': {
        //             'AddMeeting': [],
        //             'MeetingList': [],
        //         },
        //         'TeamTask': {
        //             'AddProject': [],
        //             'ProjectList': [],
        //             'AddTask': [],
        //             'TaskList': [],
        //             'AssignedTask': [],
        //             'TLAssignedTask': [],
        //         }
        //     },

        //     'Payroll': [],
        //     'Holiday': [],
        //     'Visitiormanagement': [],
        //     'Logs': [],

        //     'Recruitment': {
        //         'PostJob': [],
        //         'ListJob': [],
        //         'InboxResume': [],
        //         'CandidateTracker': {
        //             'AddResume': [],
        //             'CandidateStatus': [],
        //         },
        //         'SearchResume': [],
        //     },
        //     'Accounts': {
        //         'GoodsandServices': [],
        //         'CompanyDetails': {
        //             'AddCompany': [],
        //             'CompanyList': [],
        //         },
        //         'Purchase': {
        //             'AddPurchase': [],
        //             'PurchaseList': [],
        //         },
        //         'Sales': {
        //             'AddSales': [],
        //             'SalesList': [],
        //         },
        //         'DailyAccounts': [],
        //     },
        //     'SalesManagement': {
        //         'Lead': {
        //             'EnquiryList': [],
        //             'AddLead': [],
        //             'LeadList': [],
        //         },
        //         'PreSales': {
        //             'EnquiryList': [],
        //             'LeadList': [],
        //             'AddLead': [],
        //         },
        //         'Sales': {
        //             'LeadList': [],
        //         }

        //     },
        // });
    };



    // ------------------------------------------------------------------------------------------------
    // edit shift

    //  const [rolename, setRolename] = useState([]);
    // //  console.log("rolename--->", rolename)

    // useEffect(() => {
    //     axios.get(`https://office3i.com/api/public/api/editview_role/${id}`, {
    //         headers: {
    //             'Authorization': `Bearer ${usertoken}`,
    // 'Registered-Email': officialuseremail
    //         }
    //     })
    //     .then(res => {
    //         if (res.status === 200) {
    //             const roleData = res.data.data;

    //             console.log('roleData.permission:', roleData.permission); // Log the value here
    //             // setRolename(roleData.role_name);
    //             setRole(roleData.role_name);


    //             const parsedPermissions = typeof roleData.permission === 'string' ? JSON.parse(roleData.permission) : roleData.permission;

    //             console.log("parsedPermissions----->", typeof parsedPermissions)

    //             if (typeof parsedPermissions === 'object' && parsedPermissions !== null) {
    //                 setCheckedNames(parsedPermissions);

    //                 console.log("parsedPermissions----->", typeof parsedPermissions)
    //             } else {
    //                 console.error('Parsed permissions are not in the expected format:', parsedPermissions);
    //             }

    //             setLoading(false);
    //         }
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }, [id, usertoken]);

    useEffect(() => {
        axios.get(`https://office3i.com/api/public/api/editview_role/${id}`, {
            headers: {
                'Authorization': `Bearer ${usertoken}`,
                'Registered-Email': officialuseremail
            }
        })
            .then(res => {
                if (res.status === 200) {
                    const roleData = res.data.data;

                    // console.log('roleData.permission:', roleData.permission);
                    setRole(roleData.role_name);

                    let parsedPermissions;
                    try {
                        parsedPermissions = JSON.parse(roleData.permission);
                    } catch (error) {
                        console.error('Error parsing permissions JSON:', error);
                        parsedPermissions = {};
                    }

                    // console.log("parsedPermissions----->", typeof parsedPermissions);

                    // Additional check to ensure parsedPermissions is an object
                    if (typeof parsedPermissions === 'string') {
                        parsedPermissions = JSON.parse(parsedPermissions);
                    }

                    if (typeof parsedPermissions === 'object' && parsedPermissions !== null) {
                        setCheckedNames(parsedPermissions);
                        console.log("parsedPermissions-----> selected checkbox", parsedPermissions);
                    } else {
                        console.error('Parsed permissions are not in the expected format:', parsedPermissions);
                    }

                    setLoading(false);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [id, usertoken]);





    // ------------------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------------------

    // ADDROLE SHOW AND DISABLE VALIDATION

    const [checkedNamesvalidation, setCheckedNamesvalidation] = useState({
        'Dashboard': [],
        'EmployeeManagement': {
            'ORGStructure': [],
            'LeaveAndAttendancePolicy': [],
            'CompanyPolicy': [],
            'Employee': [],

            'Template': {
                'OfferLetter': [],
                'AppointmentLetter': [],
                'RelievingLetter': [],
            }
        },

        'Attendance': [],
        'HRSupport': [],
        'TLApproval': [],
        'HelpDesk': [],
        'Assets': [],
        'Events': [],
        'Meeting': [],
        'TeamTask': [],
        'Payroll': [],
        'Holiday': [],
        'Visitiormanagement': [],
        'Logs': [],
        'Recruitment': {
            'PostJob': [],
            'ListJob': [],
            'InboxResume': [],
            'CandidateTracker': {
                'AddResume': [],
                'CandidateStatus': [],
            },
            'SearchResume': [],
        },
        'Accounts': {
            'GoodsandServices': [],
            'CompanyDetails': {
                'AddCompany': [],
                'CompanyList': [],
            },
            'Purchase': {
                'AddPurchase': [],
                'PurchaseList': [],
            },
            'Sales': {
                'AddSales': [],
                'SalesList': [],
            },
            'DailyAccounts': [],
        }
    });


    useEffect(() => {
        axios.get(`https://office3i.com/api/public/api/editview_role/${userrole}`, {
            headers: {
                'Authorization': `Bearer ${usertoken}`,
                'Registered-Email': officialuseremail
            }
        })
            .then(res => {
                if (res.status === 200) {
                    const roleData = res.data.data;

                    // console.log('roleData.permission:', roleData.permission);
                    // setRole(roleData.role_name);

                    let parsedPermissions;
                    try {
                        parsedPermissions = JSON.parse(roleData.permission);
                    } catch (error) {
                        console.error('Error parsing permissions JSON:', error);
                        parsedPermissions = {};
                    }

                    // console.log("parsedPermissions----->", typeof parsedPermissions);

                    // Additional check to ensure parsedPermissions is an object
                    if (typeof parsedPermissions === 'string') {
                        parsedPermissions = JSON.parse(parsedPermissions);
                    }

                    if (typeof parsedPermissions === 'object' && parsedPermissions !== null) {
                        setCheckedNamesvalidation(parsedPermissions);
                        console.log("parsedPermissions------>  project plan disable", parsedPermissions)
                        // console.log("parsedPermissions----->virat", typeof parsedPermissions);
                    } else {
                        console.error('Parsed permissions are not in the expected format:', parsedPermissions);
                    }

                    // setLoading(false);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [userempid, usertoken]);


    // --------------------------------------------------------------------------------------------------------------------

    const DashboardPermissions = ['Dashboard'];

    const hasAccessToDashboard = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return DashboardPermissions.some(permission => checkedNamesvalidation.Dashboard.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    // const PostJobPermissions = ['PostJob'];

    // const hasAccessToPostJob = () => {
    //     if (!userrole.includes('1') || !userrole.includes('2')) {
    //         return PostJobPermissions.some(permission => checkedNamesvalidation.Recruitment?.PostJob.includes(permission));
    //     }
    //     return false;
    // };

    // --------------------------------------------------------------------------------------------------------------------

    const PostJobPermissions = ['Post_Job'];

    const hasAccessToPostJob = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            // return LeaveAndAttendancePolicyPermissions.some(permission => checkedNamesvalidation.LeaveAndAttendancePolicy.includes(permission));
            return PostJobPermissions.some(permission => checkedNamesvalidation.Recruitment?.PostJob.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    const ListJobPermissions = ['List_Job'];

    const hasAccessToListJob = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return ListJobPermissions.some(permission => checkedNamesvalidation.Recruitment?.ListJob.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const InboxResumePermissions = ['Inbox_Resume'];

    const hasAccessToInboxResume = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return InboxResumePermissions.some(permission => checkedNamesvalidation.Recruitment?.InboxResume.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------


    const candidatetrackerPermissions = {
        AddResume: ['Add_Resume'],
        CandidateStatus: ['Candidate_Status'],
    };

    const hasAccessTocandidatetracker = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return Object.keys(candidatetrackerPermissions).some(candidatetrackerType =>
                candidatetrackerPermissions[candidatetrackerType].some(permission =>
                    checkedNamesvalidation.Recruitment?.CandidateTracker[candidatetrackerType]?.includes(permission)
                )
            );

        }
        return false;
    };


    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const SearchResumePermissions = ['Search_Resume'];

    const hasAccessToSearchResume = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return SearchResumePermissions.some(permission => checkedNamesvalidation.Recruitment?.SearchResume.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const orgStructurePermissions = ['add_Role', 'roles_list', 'supervisor_list', 'empLevel_Category', 'emp_DocumentType', 'org_Chart'];

    const hasAccessToorgStructure = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            // return orgStructurePermissions.some(permission => checkedNamesvalidation.ORGStructure.includes(permission));
            return orgStructurePermissions.some(permission => checkedNamesvalidation.EmployeeManagement?.ORGStructure.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------



    // --------------------------------------------------------------------------------------------------------------------

    const LeaveAndAttendancePolicyPermissions = ['addShiftSlot', 'assignEmployeeShift', 'attendancePolicy', 'attendanceType', 'attendanceLocation', 'leavePolicyType', 'leavePolicyCategory', 'leavePolicy', 'overtimeType', 'Holiday'];

    const hasAccessToLeaveAndAttendancePolicy = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            // return LeaveAndAttendancePolicyPermissions.some(permission => checkedNamesvalidation.LeaveAndAttendancePolicy.includes(permission));
            return LeaveAndAttendancePolicyPermissions.some(permission => checkedNamesvalidation.EmployeeManagement?.LeaveAndAttendancePolicy.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    const CompanyPolicyPermissions = ['companypolicy'];

    const hasAccessToCompanyPolicy = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            // return LeaveAndAttendancePolicyPermissions.some(permission => checkedNamesvalidation.LeaveAndAttendancePolicy.includes(permission));
            return CompanyPolicyPermissions.some(permission => checkedNamesvalidation.EmployeeManagement?.CompanyPolicy.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------


    const templatePermissions = {
        OfferLetter: ['Add_OfferLetter', 'Offer_LetterList'],
        AppointmentLetter: ['Add_AppointmentLetter', 'Appoint_mentLetterList'],
        RelievingLetter: ['Add_RelievingLetter', 'Relieving_LetterList'],
    };

    const hasAccessToTemplate = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return Object.keys(templatePermissions).some(templateType =>
                templatePermissions[templateType].some(permission =>
                    checkedNamesvalidation.EmployeeManagement?.Template[templateType]?.includes(permission)
                )
            );
        }
        return false;
    };


    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const EmployeePermissions = ['Add_Employee', 'Emp_loyeeList', 'Employee_Confirmation'];

    const hasAccessToEmployee = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return EmployeePermissions.some(permission => checkedNamesvalidation.EmployeeManagement?.Employee.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const AttendancePermissions = ['DailyAttendance', 'Monthly_Attendance', 'Monthly_AttendanceCalendar', 'Monthly_List', 'Approval_List', 'Leave_Approval'];

    const hasAccessToAttendance = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return AttendancePermissions.some(permission => checkedNamesvalidation.Attendance.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const HRSupportPermissions = ['Approval_List', 'Template', 'Job_Opening'];

    const hasAccessToHRSupport = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return HRSupportPermissions.some(permission => checkedNamesvalidation.HRSupport.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const TLApprovalPermissions = ['Leave_Approval', 'OT_Approval'];

    const hasAccessToTLApproval = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return TLApprovalPermissions.some(permission => checkedNamesvalidation.TLApproval.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const HelpDeskPermissions = ['Issue_Type', 'Raise_Ticket', 'Tickets_List', 'Assigned_List'];

    const hasAccessToHelpDesk = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return HelpDeskPermissions.some(permission => checkedNamesvalidation.HelpDesk.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const AssetsPermissions = ['Assets_Type', 'Assign_Asset', 'Asset_List'];

    const hasAccessToAssets = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return AssetsPermissions.some(permission => checkedNamesvalidation.Assets.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    // const EventsPermissions = ['Add_Event', 'Event_List'];

    // const hasAccessToEvents = () => {
    //     if (!userrole.includes('1') || !userrole.includes('2')) {
    //         return EventsPermissions.some(permission => checkedNamesvalidation.Events.includes(permission));
    //     }
    //     return false;
    // };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    // const MeetingPermissions = ['Add_Meeting', 'Meeting_List'];

    // const hasAccessToMeeting = () => {
    //     if (!userrole.includes('1') || !userrole.includes('2')) {
    //         return MeetingPermissions.some(permission => checkedNamesvalidation.Meeting.includes(permission));
    //     }
    //     return false;
    // };
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    // const teamTaskPermissions = ['Add_Project', 'Project_List', 'Add_task', 'Task_List', 'Assigned_Task', 'TL_Assigned_Task'];

    // const hasAccessToTeamTask = () => {
    //     if (!userrole.includes('1') || !userrole.includes('2')) {
    //         return teamTaskPermissions.some(permission => checkedNamesvalidation.TeamTask.includes(permission));
    //     }
    //     return false;
    // };
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    const PayrollPermissions = ['OverTimeCalculation', 'Assign Employee Salary', 'Salarycalculation', 'Generate_payslip', 'Payslip_list'];

    const hasAccessToPayroll = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return PayrollPermissions.some(permission => checkedNamesvalidation.Payroll.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const HolidayPermissions = ['Holiday'];

    const hasAccessToHoliday = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return HolidayPermissions.some(permission => checkedNamesvalidation.Holiday.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const VisitiormanagementPermissions = ['Add_visitor', 'Visitor_log'];

    const hasAccessToVisitiormanagement = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return VisitiormanagementPermissions.some(permission => checkedNamesvalidation.Visitiormanagement.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    const LogsPermissions = ['Activity_Log', 'Employee_ActivityLog']

    const hasAccessToLogs = () => {
        if (!userrole.includes('1') || !userrole.includes('2')) {
            return LogsPermissions.some(permission => checkedNamesvalidation.Logs.includes(permission));
        }
        return false;
    };
    // --------------------------------------------------------------------------------------------------------------------
    // Accounts

    const goodsAndServicesPermissions = ['goodsandservices'];
    const companyDetailsPermissions = {
        AddCompany: ['addcompany'],
        CompanyList: ['companylist']
    };
    const salesPermissions = {
        AddSales: ['addsales'],
        SalesList: ['saleslist']
    };
    const purchasePermissions = {
        AddPurchase: ['addpurchase'],
        PurchaseList: ['purchaselist']
    };
    const dailyAccountsPermissions = ['dailyaccounts'];

    // Define access check functions
    const hasAccessToGoodsAndServices = () => {
        return goodsAndServicesPermissions.some(permission => checkedNamesvalidation.Accounts?.GoodsandServices.includes(permission));
    };

    const hasAccessToCompanyDetails = () => {
        return Object.keys(companyDetailsPermissions).some(companyDetail =>
            companyDetailsPermissions[companyDetail].some(permission =>
                checkedNamesvalidation.Accounts?.CompanyDetails[companyDetail]?.includes(permission)
            )
        );
    };

    const hasAccessToSalesInvoice = () => {
        return Object.keys(salesPermissions).some(saleType =>
            salesPermissions[saleType].some(permission =>
                checkedNamesvalidation.Accounts?.Sales[saleType]?.includes(permission)
            )
        );
    };

    const hasAccessToPurchaseInvoice = () => {
        return Object.keys(purchasePermissions).some(purchaseType =>
            purchasePermissions[purchaseType].some(permission =>
                checkedNamesvalidation.Accounts?.Purchase[purchaseType]?.includes(permission)
            )
        );
    };

    const hasAccessToDailyAccounts = () => {
        return dailyAccountsPermissions.some(permission => checkedNamesvalidation.Accounts?.DailyAccounts.includes(permission));
    };

    // Check if any permissions are available
    const hasAnyAccountPermissions = () => {
        return hasAccessToGoodsAndServices() ||
            hasAccessToCompanyDetails() ||
            hasAccessToSalesInvoice() ||
            hasAccessToPurchaseInvoice() ||
            hasAccessToDailyAccounts();
    };



    // // --------------------------------------------------------------------------------------------------------------------
    // Sales Management

    // Define permissions based on API response
    const salesManagementPermissions = {
        Lead: {
            EnquiryList: ['enquirylist'],
            AddLead: ['addlead'],
            LeadList: ['leadlist']
        },
        PreSales: {
            EnquiryList: ['enquirylist'],
            LeadList: ['leadlist'],
            AddLead: ['addlead']
        },
        Sales: {
            LeadList: ['leadlist']
        }
    };

    // Define access check functions
    const hasAccessToLead = () => {
        return Object.keys(salesManagementPermissions.Lead).some(permissionType =>
            salesManagementPermissions.Lead[permissionType].some(permission =>
                checkedNamesvalidation.SalesManagement?.Lead[permissionType]?.includes(permission)
            )
        );
    };

    const hasAccessToPreSales = () => {
        return Object.keys(salesManagementPermissions.PreSales).some(permissionType =>
            salesManagementPermissions.PreSales[permissionType].some(permission =>
                checkedNamesvalidation.SalesManagement?.PreSales[permissionType]?.includes(permission)
            )
        );
    };

    const hasAccessToSales = () => {
        return Object.keys(salesManagementPermissions.Sales).some(permissionType =>
            salesManagementPermissions.Sales[permissionType].some(permission =>
                checkedNamesvalidation.SalesManagement?.Sales[permissionType]?.includes(permission)
            )
        );
    };

    // Check if any permissions are available
    const hasAnySalesManagementPermissions = () => {
        return hasAccessToLead() || hasAccessToPreSales() || hasAccessToSales();
    };


    // --------------------------------------------------------------------------------------------------------------------
    //    Team Management

    // Define permissions based on API response
    const teamManagementPermissions = {
        Events: {
            AddEvent: ['addevent'],
            EventList: ['eventlist']
        },
        Meeting: {
            AddMeeting: ['addmeeting'],
            MeetingList: ['meetinglist']
        },
        TeamTask: {
            AddProject: ['addproject'],
            ProjectList: ['projectlist'],
            AddTask: ['addtask'],
            TaskList: ['tasklist'],
            AssignedTask: ['assignedtask'],
            TLAssignedTask: ['tlassignedtask']
        }
    };

    // Define access check functions
    const hasAccessToEvents = () => {
        return Object.keys(teamManagementPermissions.Events).some(permissionType =>
            teamManagementPermissions.Events[permissionType].some(permission =>
                checkedNamesvalidation.TeamManagement?.Events[permissionType]?.includes(permission)
            )
        );
    };

    const hasAccessToMeeting = () => {
        return Object.keys(teamManagementPermissions.Meeting).some(permissionType =>
            teamManagementPermissions.Meeting[permissionType].some(permission =>
                checkedNamesvalidation.TeamManagement?.Meeting[permissionType]?.includes(permission)
            )
        );
    };

    const hasAccessToTeamTask = () => {
        return Object.keys(teamManagementPermissions.TeamTask).some(permissionType =>
            teamManagementPermissions.TeamTask[permissionType].some(permission =>
                checkedNamesvalidation.TeamManagement?.TeamTask[permissionType]?.includes(permission)
            )
        );
    };

    // Check if any permissions are available
    const hasAnyTeamManagementPermissions = () => {
        return hasAccessToEvents() || hasAccessToMeeting() || hasAccessToTeamTask();
    };

    // --------------------------------------------------------------------------------------------------------------------



    // ---------------------------------------------------------------------------------------------------------------------

    return (
        <div>
            <Container className='checklist__container'>
                <Row className='mb-4'>
                    <Col>
                        <h4>EDIT ROLE</h4>
                    </Col>
                </Row>

                <Row className='mb-2'>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <Form.Group controlId="formRole" className='mb-3'>
                            <Form.Label style={{ fontWeight: 'bold' }}>Add Role Name</Form.Label>
                            <Form.Control type="text" value={role} onChange={handleRoleChange} placeholder="Enter Role Name" disabled/>
                        </Form.Group>
                    </Col>
                </Row>


                <div className='checklist'>

                    {/* ----------1-------------- */}
                    <Row className='mb-5'>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <label className="checkbox-container" style={{ cursor: 'not-allowed' }}>
                                <input type="checkbox" id="dashboard" value="Dashboard" name="Dashboard"

                                    checked={checkedNames['Dashboard'] && checkedNames['Dashboard'].includes('Dashboard')}
                                    onChange={handlesingleCheckboxChange}
                                    //  disabled
                                    disabled={hasAccessToDashboard() && checkedNamesvalidation['Dashboard'] && checkedNamesvalidation['Dashboard'].length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Dashboard</span>
                            </label>

                        </Col>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="EmployeeManagement">Employee Management</h4>


                            <h5 id="ORGStructure">ORG Structure</h5>
                            {/* 1 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="addRole" value="add_Role" name="ORGStructure" data-category="EmployeeManagement"
                                    // checked={checkedNames['ORGStructure'] && checkedNames['ORGStructure'].includes('add_Role')}
                                    checked={checkedNames['EmployeeManagement']['ORGStructure'].includes('add_Role')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.ORGStructure.includes('add_Role')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Role / Designation</span>
                            </label>
                            {/* 2 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="roleslist" value="roles_list" name="ORGStructure" data-category="EmployeeManagement"
                                    // checked={checkedNames['ORGStructure'] && checkedNames['ORGStructure'].includes('roles_list')}
                                    checked={checkedNames['EmployeeManagement']['ORGStructure'].includes('roles_list')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.ORGStructure.includes('roles_list')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Roles List</span>
                            </label>
                            {/* 3 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="supervisorlist" value="supervisor_list" name="ORGStructure" data-category="EmployeeManagement"
                                    // checked={checkedNames['ORGStructure'] && checkedNames['ORGStructure'].includes('supervisor_list')}
                                    checked={checkedNames['EmployeeManagement']['ORGStructure'].includes('supervisor_list')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.ORGStructure.includes('supervisor_list')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Supervisor List / Hierarchy</span>
                            </label>
                            {/* 4 */}
                            {/* <label className="checkbox-container">
                <input type="checkbox" id="empLevelCategory" value="empLevel_Category" name="ORGStructure" data-category="EmployeeManagement"
                  
                  checked={checkedNames['EmployeeManagement']['ORGStructure'].includes('empLevel_Category')}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Employee Level Category</span>
              </label> */}
                            {/* 5 */}
                            {/* <label className="checkbox-container">
                <input type="checkbox" id="empDocumentType" value="emp_DocumentType" name="ORGStructure" data-category="EmployeeManagement"

                 
                  checked={checkedNames['EmployeeManagement']['ORGStructure'].includes('emp_DocumentType')}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Employee Document Type</span>
              </label> */}
                            {/* 6 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="orgChart" value="org_Chart" name="ORGStructure" data-category="EmployeeManagement"

                                    // checked={checkedNames['ORGStructure'] && checkedNames['ORGStructure'].includes('org_Chart')}
                                    checked={checkedNames['EmployeeManagement']['ORGStructure'].includes('org_Chart')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.ORGStructure.includes('org_Chart')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">ORG chart</span>
                            </label>




                            <h5 id="LeaveandAttendancePolicy">Attendance Policy</h5>
                            {/* 
              <label className="checkbox-container">
                <input type="checkbox" id="AddShiftSlot" value="addShiftSlot" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"

                  // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('addShiftSlot')}
                  checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('addShiftSlot')}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Add Shift Slot</span>
              </label> */}



                            <label className="checkbox-container">
                                <input type="checkbox" id="AttendancePolicy" value="attendancePolicy" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                                    // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('attendancePolicy')}
                                    checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('attendancePolicy')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.LeaveAndAttendancePolicy.includes('attendancePolicy')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Attendance Slot</span>
                            </label>

                            {/* <label className="checkbox-container">
                <input type="checkbox" id="AttendanceType" value="attendanceType" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                  // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('attendanceType')}
                  checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('attendanceType')}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Attendance Type</span>
              </label> */}

                            {/* <label className="checkbox-container">
                <input type="checkbox" id="AttendanceLocation" value="attendanceLocation" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                  // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('attendanceLocation')}
                  checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('attendanceLocation')}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Attendance Location</span>
              </label>

              <label className="checkbox-container">
                <input type="checkbox" id="LeavePolicyType" value="leavePolicyType" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                  // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('leavePolicyType')}
                  checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('leavePolicyType')}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Leave Policy Type</span>
              </label> */}

                            {/* <label className="checkbox-container">
                <input type="checkbox" id="LeavePolicyCategory" value="leavePolicyCategory" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                  // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('leavePolicyCategory')}
                  checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('leavePolicyCategory')}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Leave Policy Category</span>
              </label> */}

                            <label className="checkbox-container">
                                <input type="checkbox" id="LeavePolicy" value="leavePolicy" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                                    // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('leavePolicy')}
                                    checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('leavePolicy')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.LeaveAndAttendancePolicy.includes('leavePolicy')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Leave Policy</span>
                            </label>

                            <label className="checkbox-container">
                                <input type="checkbox" id="AssignEmployeeShift" value="assignEmployeeShift" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                                    // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('assignEmployeeShift')}
                                    checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('assignEmployeeShift')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.LeaveAndAttendancePolicy.includes('assignEmployeeShift')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Assign Employee Shift</span>
                            </label>

                            {/* <label className="checkbox-container">
                <input type="checkbox" id="OvertimeType" value="overtimeType" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                  // checked={checkedNames['LeaveAndAttendancePolicy'] && checkedNames['LeaveAndAttendancePolicy'].includes('overtimeType')}
                  checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('overtimeType')}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">Overtime Type</span>
              </label> */}

                            <label className="checkbox-container">
                                <input type="checkbox" id="Holiday" value="Holiday" name="LeaveAndAttendancePolicy" data-category="EmployeeManagement"
                                    // checked={checkedNames['Holiday'] && checkedNames['Holiday'].includes('Holiday')}
                                    checked={checkedNames['EmployeeManagement']['LeaveAndAttendancePolicy'].includes('Holiday')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.LeaveAndAttendancePolicy.includes('Holiday')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Holiday</span>
                            </label>


                        </Col>



                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 mt-7 list__colum' style={{ whiteSpace: 'nowrap' }}>

                            <label className="checkbox-container">
                                <input type="checkbox" id="CompanyPolicy" value="companypolicy" name="CompanyPolicy" data-category="EmployeeManagement"

                                    // checked={checkedNames['Dashboard'] && checkedNames['Dashboard'].includes('Dashboard')}
                                    checked={checkedNames['EmployeeManagement']['CompanyPolicy'].includes('companypolicy')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.CompanyPolicy.includes('companypolicy')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Company Policy</span>
                            </label>


                            <h5 id="Template">Template</h5>

                            <Col sm={12} md={6} lg={6} xl={3} className='mb-3  ml-3 list__colum'>

                                <h6 className='list__title' id="OfferLetter">OfferLetter</h6>
                                {/* 1 */}
                                <label className="checkbox-container">
                                    <input type="checkbox" id="AddOffetLetter" value="Add_OfferLetter" name="OfferLetter" data-category="EmployeeManagement" data-sub-category="Template"

                                        checked={checkedNames['EmployeeManagement']['Template']['OfferLetter'].includes('Add_OfferLetter')}
                                        onChange={handleCheckboxChange}
                                        disabled={!checkedNamesvalidation.EmployeeManagement.Template.OfferLetter.includes('Add_OfferLetter')}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="checkbox-label">Add Offer Letter</span>
                                </label>
                                {/* 2 */}
                                <label className="checkbox-container">
                                    <input type="checkbox" id="OfferLetterList" value="Offer_LetterList" name="OfferLetter" data-category="EmployeeManagement" data-sub-category="Template"

                                        checked={checkedNames['EmployeeManagement']['Template']['OfferLetter'].includes('Offer_LetterList')}
                                        onChange={handleCheckboxChange}
                                        disabled={!checkedNamesvalidation.EmployeeManagement.Template.OfferLetter.includes('Offer_LetterList')}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="checkbox-label">Offer Letter List</span>
                                </label>


                            </Col>

                            <Col sm={12} md={6} lg={6} xl={3} className='mb-3 ml-3 list__colum'>

                                <h6 className='list__title' id="AppointmentLetter">Appointment Letter</h6>
                                {/* 1 */}
                                <label className="checkbox-container">
                                    <input type="checkbox" id="AddAppointmentLetter" value="Add_AppointmentLetter" name="AppointmentLetter" data-category="EmployeeManagement" data-sub-category="Template"

                                        checked={checkedNames['EmployeeManagement']['Template']['AppointmentLetter'].includes('Add_AppointmentLetter')}
                                        onChange={handleCheckboxChange}
                                        disabled={!checkedNamesvalidation.EmployeeManagement.Template.AppointmentLetter.includes('Add_AppointmentLetter')}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="checkbox-label">Add Appointment Letter</span>
                                </label>
                                {/* 2 */}
                                <label className="checkbox-container">
                                    <input type="checkbox" id="AppointmentLetterList" value="Appoint_mentLetterList" name="AppointmentLetter" data-category="EmployeeManagement" data-sub-category="Template"

                                        checked={checkedNames['EmployeeManagement']['Template']['AppointmentLetter'].includes('Appoint_mentLetterList')}
                                        onChange={handleCheckboxChange}
                                        disabled={!checkedNamesvalidation.EmployeeManagement.Template.AppointmentLetter.includes('Appoint_mentLetterList')}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="checkbox-label">Appointment Letter List</span>
                                </label>

                            </Col>

                            <Col sm={12} md={6} lg={6} xl={3} className='mb-3 ml-3 list__colum'>

                                <h6 className='list__title' id="RelievingLetter">Relieving Letter</h6>
                                {/* 1 */}
                                <label className="checkbox-container">
                                    <input type="checkbox" id="AddRelievingLetter" value="Add_RelievingLetter" name="RelievingLetter" data-category="EmployeeManagement" data-sub-category="Template"

                                        checked={checkedNames['EmployeeManagement']['Template']['RelievingLetter'].includes('Add_RelievingLetter')}
                                        onChange={handleCheckboxChange}
                                        disabled={!checkedNamesvalidation.EmployeeManagement.Template.RelievingLetter.includes('Add_RelievingLetter')}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="checkbox-label">Add Relieving Letter</span>
                                </label>
                                {/* 2 */}
                                <label className="checkbox-container">
                                    <input type="checkbox" id="RelievingLetterList" value="Relieving_LetterList" name="RelievingLetter" data-category="EmployeeManagement" data-sub-category="Template"

                                        checked={checkedNames['EmployeeManagement']['Template']['RelievingLetter'].includes('Relieving_LetterList')}
                                        onChange={handleCheckboxChange}
                                        disabled={!checkedNamesvalidation.EmployeeManagement.Template.RelievingLetter.includes('Relieving_LetterList')}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="checkbox-label">Relieving Letter List</span>
                                </label>

                            </Col>


                            <h5 id="Employee">Employee Info</h5>
                            {/* 1 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="AddEmployee" value="Add_Employee" name="Employee" data-category="EmployeeManagement"
                                    // checked={checkedNames['Employee'] && checkedNames['Employee'].includes('Add_Employee')}
                                    checked={checkedNames['EmployeeManagement']['Employee'].includes('Add_Employee')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.Employee.includes('Add_Employee')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Employee</span>
                            </label>
                            {/* 2 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="EmployeeList" value="Emp_loyeeList" name="Employee" data-category="EmployeeManagement"
                                    // checked={checkedNames['Employee'] && checkedNames['Employee'].includes('Emp_loyeeList')}
                                    checked={checkedNames['EmployeeManagement']['Employee'].includes('Emp_loyeeList')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.Employee.includes('Emp_loyeeList')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Employee List</span>
                            </label>
                            {/* 3 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="EmployeeConfirmation" value="Employee_Confirmation" name="Employee" data-category="EmployeeManagement"
                                    // checked={checkedNames['Employee'] && checkedNames['Employee'].includes('Employee_Confirmation')}
                                    checked={checkedNames['EmployeeManagement']['Employee'].includes('Employee_Confirmation')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.EmployeeManagement.Employee.includes('Employee_Confirmation')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Probation Completion</span>
                            </label>

                        </Col>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="Attendance">Attendance Calculation</h4>
                            {/* 1 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="DailyAttendance" value="DailyAttendance" name="Attendance"
                                    checked={checkedNames['Attendance'] && checkedNames['Attendance'].includes('DailyAttendance')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Attendance.includes('DailyAttendance')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Daily Attendance</span>
                            </label>
                            {/* 2 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="MonthlyAttendance" value="Monthly_Attendance" name="Attendance"
                                    checked={checkedNames['Attendance'] && checkedNames['Attendance'].includes('Monthly_Attendance')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Attendance.includes('Monthly_Attendance')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Monthly Attendance</span>
                            </label>
                            {/* 3 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="MonthlyAttendanceCalendar" value="Monthly_AttendanceCalendar" name="Attendance"
                                    checked={checkedNames['Attendance'] && checkedNames['Attendance'].includes('Monthly_AttendanceCalendar')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Attendance.includes('Monthly_AttendanceCalendar')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label" style={{ display: 'flex' }}>Monthly Attendance Calendar View</span>
                            </label>
                            {/* 4 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="MonthlyList" value="Monthly_List" name="Attendance"
                                    checked={checkedNames['Attendance'] && checkedNames['Attendance'].includes('Monthly_List')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Attendance.includes('Monthly_List')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Monthly List</span>
                            </label>

                            {/* 5 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="ApprovalList" value="Approval_List" name="Attendance"
                                    checked={checkedNames['Attendance'] && checkedNames['Attendance'].includes('Approval_List')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Attendance.includes('Approval_List')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">HR Approval List</span>
                            </label>

                            {/* 6 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="LeaveApproval" value="Leave_Approval" name="Attendance"
                                    checked={checkedNames['Attendance'] && checkedNames['Attendance'].includes('Leave_Approval')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Attendance.includes('Leave_Approval')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">TL Approval List</span>
                            </label>


                            <h4 className='list__title' id="Recruitment">Recruitment</h4>

                            <label className="checkbox-container">
                                <input type="checkbox" id="PostJob" value="Post_Job" name="PostJob" data-category="Recruitment"
                                    checked={checkedNames['Recruitment']['PostJob'].includes('Post_Job')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Recruitment.PostJob.includes('Post_Job')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Post Job</span>
                            </label>

                            <label className="checkbox-container">
                                <input type="checkbox" id="ListJob" value="List_Job" name="ListJob" data-category="Recruitment"
                                    checked={checkedNames['Recruitment']['ListJob'].includes('List_Job')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Recruitment.ListJob.includes('List_Job')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">List Job</span>
                            </label>

                            <label className="checkbox-container">
                                <input type="checkbox" id="InboxResume" value="Inbox_Resume" name="InboxResume" data-category="Recruitment"
                                    checked={checkedNames['Recruitment']['InboxResume'].includes('Inbox_Resume')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Recruitment.InboxResume.includes('Inbox_Resume')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Inbox Webmail</span>
                            </label>

                            <h5 id="CandidateTracker">Candidate Tracker</h5>
                            <label className="checkbox-container">
                                <input type="checkbox" id="AddResume" value="Add_Resume" name="AddResume" data-category="Recruitment" data-sub-category="CandidateTracker"
                                    checked={checkedNames['Recruitment']['CandidateTracker']['AddResume'].includes('Add_Resume')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Recruitment.CandidateTracker.AddResume.includes('Add_Resume')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Call Tracker</span>
                            </label>
                            <label className="checkbox-container">
                                <input type="checkbox" id="CandidateStatus" value="Candidate_Status" name="CandidateStatus" data-category="Recruitment" data-sub-category="CandidateTracker"
                                    checked={checkedNames['Recruitment']['CandidateTracker']['CandidateStatus'].includes('Candidate_Status')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Recruitment.CandidateTracker.CandidateStatus.includes('Candidate_Status')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">View Tracker</span>
                            </label>

                            <label className="checkbox-container">
                                <input type="checkbox" id="SearchResume" value="Search_Resume" name="SearchResume" data-category="Recruitment"
                                    checked={checkedNames['Recruitment']['SearchResume'].includes('Search_Resume')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Recruitment.SearchResume.includes('Search_Resume')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Search Resume</span>
                            </label>


                        </Col>
                    </Row>

                    {/* ----------1-------------- */}


                    {/* ----------2-------------- */}

                    <Row className='mb-5'>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="Payroll">Payroll</h4>
                            {/* 1 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="OverTimeCalculation" value="OverTimeCalculation" name="Payroll"
                                    checked={checkedNames['Payroll'] && checkedNames['Payroll'].includes('OverTimeCalculation')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Payroll.includes('OverTimeCalculation')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">OverTime Calculation</span>
                            </label>
                            {/* 2 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="Assign Employee Salary" value="Assign Employee Salary" name="Payroll"
                                    checked={checkedNames['Payroll'] && checkedNames['Payroll'].includes('Assign Employee Salary')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Payroll.includes('Assign Employee Salary')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Assign Employee Salary</span>
                            </label>
                            {/* 3 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="Salarycalculation" value="Salarycalculation" name="Payroll"
                                    checked={checkedNames['Payroll'] && checkedNames['Payroll'].includes('Salarycalculation')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Payroll.includes('Salarycalculation')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Salary calculation</span>
                            </label>
                            {/* 4 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="Generatepayslip" value="Generate_payslip" name="Payroll"
                                    checked={checkedNames['Payroll'] && checkedNames['Payroll'].includes('Generate_payslip')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Payroll.includes('Generate_payslip')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Generate payslip</span>
                            </label>
                            {/* 5 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="Paysliplist" value="Payslip_list" name="Payroll"
                                    checked={checkedNames['Payroll'] && checkedNames['Payroll'].includes('Payslip_list')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Payroll.includes('Payslip_list')}
                                />

                                <span className="checkmark"></span>
                                <span className="checkbox-label">Payslip list</span>
                            </label>


                        </Col>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="Accounts">Accounts</h4>

                            {/* Goods and Services */}
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="GoodsandServices"
                                    value="goodsandservices"
                                    name="GoodsandServices"
                                    data-category="Accounts"
                                    checked={checkedNames['Accounts']['GoodsandServices'].includes('goodsandservices')}
                                    onChange={handleCheckboxChange}
                                    disabled={!hasAccessToGoodsAndServices()}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Goods and Services</span>
                            </label>

                            {/* Company Details */}
                            <h5 id="CompanyDetails">Company Details</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddCompany"
                                    value="addcompany"
                                    name="AddCompany"
                                    data-category="Accounts"
                                    data-sub-category="CompanyDetails"
                                    checked={checkedNames['Accounts']['CompanyDetails']['AddCompany'].includes('addcompany')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Accounts?.CompanyDetails.AddCompany.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Company</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="CompanyList"
                                    value="companylist"
                                    name="CompanyList"
                                    data-category="Accounts"
                                    data-sub-category="CompanyDetails"
                                    checked={checkedNames['Accounts']['CompanyDetails']['CompanyList'].includes('companylist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Accounts?.CompanyDetails.CompanyList.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Company List</span>
                            </label>

                            {/* Purchase */}
                            <h5 id="Purchase">Purchase</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddPurchase"
                                    value="addpurchase"
                                    name="AddPurchase"
                                    data-category="Accounts"
                                    data-sub-category="Purchase"
                                    checked={checkedNames['Accounts']['Purchase']['AddPurchase'].includes('addpurchase')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Accounts?.Purchase.AddPurchase.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Purchase</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="PurchaseList"
                                    value="purchaselist"
                                    name="PurchaseList"
                                    data-category="Accounts"
                                    data-sub-category="Purchase"
                                    checked={checkedNames['Accounts']['Purchase']['PurchaseList'].includes('purchaselist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Accounts?.Purchase.PurchaseList.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Purchase List</span>
                            </label>

                            {/* Sales */}
                            <h5 id="Sales">Sales</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddSales"
                                    value="addsales"
                                    name="AddSales"
                                    data-category="Accounts"
                                    data-sub-category="Sales"
                                    checked={checkedNames['Accounts']['Sales']['AddSales'].includes('addsales')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Accounts?.Sales.AddSales.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Sales</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="SalesList"
                                    value="saleslist"
                                    name="SalesList"
                                    data-category="Accounts"
                                    data-sub-category="Sales"
                                    checked={checkedNames['Accounts']['Sales']['SalesList'].includes('saleslist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Accounts?.Sales.SalesList.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Sales List</span>
                            </label>

                            {/* Daily Accounts */}
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="DailyAccounts"
                                    value="dailyaccounts"
                                    name="DailyAccounts"
                                    data-category="Accounts"
                                    checked={checkedNames['Accounts']['DailyAccounts'].includes('dailyaccounts')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Accounts?.DailyAccounts.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Daily Accounts</span>
                            </label>
                        </Col>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="SalesManagement">Sales Management</h4>

                            {/* Lead */}
                            <h5 id="Lead">Lead</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="EnquiryListLead"
                                    value="enquirylist"
                                    name="EnquiryList"
                                    data-category="SalesManagement"
                                    data-sub-category="Lead"
                                    checked={checkedNames['SalesManagement']['Lead']['EnquiryList'].includes('enquirylist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.SalesManagement?.Lead?.EnquiryList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Enquiry List</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddLead"
                                    value="addlead"
                                    name="AddLead"
                                    data-category="SalesManagement"
                                    data-sub-category="Lead"
                                    checked={checkedNames['SalesManagement']['Lead']['AddLead'].includes('addlead')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.SalesManagement?.Lead?.AddLead?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Lead</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="LeadList"
                                    value="leadlist"
                                    name="LeadList"
                                    data-category="SalesManagement"
                                    data-sub-category="Lead"
                                    checked={checkedNames['SalesManagement']['Lead']['LeadList'].includes('leadlist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.SalesManagement?.Lead?.LeadList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Lead List</span>
                            </label>

                            {/* PreSales */}
                            <h5 id="PreSales">PreSales</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="EnquiryListPreSales"
                                    value="enquirylist"
                                    name="EnquiryList"
                                    data-category="SalesManagement"
                                    data-sub-category="PreSales"
                                    checked={checkedNames['SalesManagement']['PreSales']['EnquiryList'].includes('enquirylist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.SalesManagement?.PreSales?.EnquiryList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Enquiry List</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="LeadListPreSales"
                                    value="leadlist"
                                    name="LeadList"
                                    data-category="SalesManagement"
                                    data-sub-category="PreSales"
                                    checked={checkedNames['SalesManagement']['PreSales']['LeadList'].includes('leadlist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.SalesManagement?.PreSales?.LeadList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Lead List</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddLeadPreSales"
                                    value="addlead"
                                    name="AddLead"
                                    data-category="SalesManagement"
                                    data-sub-category="PreSales"
                                    checked={checkedNames['SalesManagement']['PreSales']['AddLead'].includes('addlead')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.SalesManagement?.PreSales?.AddLead?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Lead</span>
                            </label>

                            {/* Sales */}
                            <h5 id="Sales">Sales</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="LeadListSales"
                                    value="leadlist"
                                    name="LeadList"
                                    data-category="SalesManagement"
                                    data-sub-category="Sales"
                                    checked={checkedNames['SalesManagement']['Sales']['LeadList'].includes('leadlist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.SalesManagement?.Sales?.LeadList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Lead List</span>
                            </label>
                        </Col>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="Visitiormanagement">Visitor management</h4>
                            {/* 1 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="Addvisitor" value="Add_visitor" name="Visitiormanagement"
                                    checked={checkedNames['Visitiormanagement'] && checkedNames['Visitiormanagement'].includes('Add_visitor')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Visitiormanagement.includes('Add_visitor')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add visitor</span>
                            </label>
                            {/* 2 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="Visitorlog" value="Visitor_log" name="Visitiormanagement"
                                    checked={checkedNames['Visitiormanagement'] && checkedNames['Visitiormanagement'].includes('Visitor_log')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Visitiormanagement.includes('Visitor_log')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Visitor log</span>
                            </label>


                            <h4 className='list__title' id="TeamManagement">Team Management</h4>

                            {/* Events */}
                            <h5 id="Events">Events</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddEvent"
                                    value="addevent"
                                    name="AddEvent"
                                    data-category="TeamManagement"
                                    data-sub-category="Events"
                                    checked={checkedNames['TeamManagement']['Events']['AddEvent'].includes('addevent')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.Events?.AddEvent?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Event</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="EventList"
                                    value="eventlist"
                                    name="EventList"
                                    data-category="TeamManagement"
                                    data-sub-category="Events"
                                    checked={checkedNames['TeamManagement']['Events']['EventList'].includes('eventlist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.Events?.EventList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Event List</span>
                            </label>

                            {/* Meeting */}
                            <h5 id="Meeting">Meeting</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddMeeting"
                                    value="addmeeting"
                                    name="AddMeeting"
                                    data-category="TeamManagement"
                                    data-sub-category="Meeting"
                                    checked={checkedNames['TeamManagement']['Meeting']['AddMeeting'].includes('addmeeting')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.Meeting?.AddMeeting?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Meeting</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="MeetingList"
                                    value="meetinglist"
                                    name="MeetingList"
                                    data-category="TeamManagement"
                                    data-sub-category="Meeting"
                                    checked={checkedNames['TeamManagement']['Meeting']['MeetingList'].includes('meetinglist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.Meeting?.MeetingList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Meeting List</span>
                            </label>

                            {/* TeamTask */}
                            <h5 id="TeamTask">Team Task</h5>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddProject"
                                    value="addproject"
                                    name="AddProject"
                                    data-category="TeamManagement"
                                    data-sub-category="TeamTask"
                                    checked={checkedNames['TeamManagement']['TeamTask']['AddProject'].includes('addproject')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.TeamTask?.AddProject?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Project</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="ProjectList"
                                    value="projectlist"
                                    name="ProjectList"
                                    data-category="TeamManagement"
                                    data-sub-category="TeamTask"
                                    checked={checkedNames['TeamManagement']['TeamTask']['ProjectList'].includes('projectlist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.TeamTask?.ProjectList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Project List</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AddTask"
                                    value="addtask"
                                    name="AddTask"
                                    data-category="TeamManagement"
                                    data-sub-category="TeamTask"
                                    checked={checkedNames['TeamManagement']['TeamTask']['AddTask'].includes('addtask')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.TeamTask?.AddTask?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Add Task</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="TaskList"
                                    value="tasklist"
                                    name="TaskList"
                                    data-category="TeamManagement"
                                    data-sub-category="TeamTask"
                                    checked={checkedNames['TeamManagement']['TeamTask']['TaskList'].includes('tasklist')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.TeamTask?.TaskList?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Task List</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AssignedTask"
                                    value="assignedtask"
                                    name="AssignedTask"
                                    data-category="TeamManagement"
                                    data-sub-category="TeamTask"
                                    checked={checkedNames['TeamManagement']['TeamTask']['AssignedTask'].includes('assignedtask')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.TeamTask?.AssignedTask?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Assigned Task</span>
                            </label>
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="TLAssignedTask"
                                    value="tlassignedtask"
                                    name="TLAssignedTask"
                                    data-category="TeamManagement"
                                    data-sub-category="TeamTask"
                                    checked={checkedNames['TeamManagement']['TeamTask']['TLAssignedTask'].includes('tlassignedtask')}
                                    onChange={handleCheckboxChange}
                                    disabled={!checkedNamesvalidation.TeamManagement?.TeamTask?.TLAssignedTask?.length > 0}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">TL Assigned Task</span>
                            </label>
                        </Col>


                    </Row>
                    {/* ----------2-------------- */}

                    {/* ----------3-------------- */}

                    <Row className='mb-5'>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="Assets">Assets Management</h4>
                            {/* 1 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="AssetsType" value="Assets_Type" name="Assets"
                                    checked={checkedNames['Assets'] && checkedNames['Assets'].includes('Assets_Type')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Assets.includes('Assets_Type')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Assets Type</span>
                            </label>
                            {/* 2 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="AssignAsset" value="Assign_Asset" name="Assets"
                                    checked={checkedNames['Assets'] && checkedNames['Assets'].includes('Assign_Asset')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Assets.includes('Assign_Asset')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Assign Asset</span>
                            </label>
                            {/* 3 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="AssetList" value="Asset_List" name="Assets"
                                    checked={checkedNames['Assets'] && checkedNames['Assets'].includes('Asset_List')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Assets.includes('Asset_List')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Asset List</span>
                            </label>


                        </Col>


                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="HelpDesk">HelpDesk</h4>

                            {/* Issue Type */}
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="IssueType"
                                    value="Issue_Type"
                                    name="HelpDesk"
                                    checked={checkedNames['HelpDesk'] && checkedNames['HelpDesk'].includes('Issue_Type')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.HelpDesk.includes('Issue_Type')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Issue Type</span>
                            </label>

                            {/* Raise Ticket */}
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="RaiseTicket"
                                    value="Raise_Ticket"
                                    name="HelpDesk"
                                    checked={checkedNames['HelpDesk'] && checkedNames['HelpDesk'].includes('Raise_Ticket')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.HelpDesk.includes('Raise_Ticket')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Raise Ticket</span>
                            </label>

                            {/* Tickets List */}
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="TicketsList"
                                    value="Tickets_List"
                                    name="HelpDesk"
                                    checked={checkedNames['HelpDesk'] && checkedNames['HelpDesk'].includes('Tickets_List')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.HelpDesk.includes('Tickets_List')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Tickets List</span>
                            </label>

                            {/* Assigned List */}
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="AssignedList"
                                    value="Assigned_List"
                                    name="HelpDesk"
                                    checked={checkedNames['HelpDesk'] && checkedNames['HelpDesk'].includes('Assigned_List')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.HelpDesk.includes('Assigned_List')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Assigned List</span>
                            </label>
                        </Col>

                        <Col sm={12} md={6} lg={6} xl={3} className='mb-3 list__colum'>
                            <h4 className='list__title' id="Logs">Logs</h4>
                            {/* 1 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="ActivityLog" value="Activity_Log" name="Logs"
                                    checked={checkedNames['Logs'] && checkedNames['Logs'].includes('Activity_Log')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Logs.includes('Activity_Log')}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Activity Log</span>
                            </label>
                            {/* 2 */}
                            <label className="checkbox-container">
                                <input type="checkbox" id="EmployeeActivityLog" value="Employee_ActivityLog" name="Logs"
                                    checked={checkedNames['Logs'] && checkedNames['Logs'].includes('Employee_ActivityLog')}
                                    onChange={handlesingleCheckboxChange}
                                    disabled={!checkedNamesvalidation.Logs.includes('Employee_ActivityLog')}
                                />

                                <span className="checkmark"></span>
                                <span className="checkbox-label">Employee Activity Log</span>
                            </label>
                        </Col>

                    </Row>
                    {/* ----------3-------------- */}

                    <Row>
                        <Col style={{ display: 'flex', gap: '15px' }}>
                            <Button className='checklist__submit__btn' onClick={handleSubmit}>Submit</Button>
                            <Button className='checklist__cancel__btn' onClick={handleCancel}>Cancel</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default EditRole;
