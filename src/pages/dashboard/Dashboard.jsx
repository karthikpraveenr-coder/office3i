import React, { useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';


export default function MainDashboard() {
    // Retrieve customerData from local storage
    const customerData = JSON.parse(localStorage.getItem('customerData')) || {};

    const userrole = customerData.userrole || '';


    return (
        <div>
            {userrole === '1' && <AdminDashboard />}
            {userrole === '2' && (
                <>
                    <div style={{paddingBottom:'50px'}}>
                        <AdminDashboard />
                    </div>
                  
                </>
            )}
            {!['1', '2'].includes(userrole) && <UserDashboard />}
        </div>
    );
}
