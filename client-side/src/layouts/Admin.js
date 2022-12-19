import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import CreateSocietyForm from "views/admin/CreateSocietyForm.js";
import SocietyList from "views/admin/SocietyList.js";
import SocietyMembersListTable from "views/admin/SocietyMembersListTable";
import SocietyMembersAllListTable from "views/admin/SocietyMembersAllListTable";
import CreateRoleForm from "views/admin/CreateRoleForm";
import RolesListTable from "views/admin/RolesListTable";
import EditSocietyForm from "views/admin/EditSocietyForm";
import EditRoleForm from "views/admin/EditRoleForm";


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/createSociety" exact component={CreateSocietyForm} />
            <Route path="/admin/societyList" exact component={SocietyList} />
            <Route path="/admin/societyMembersList" exact component={SocietyMembersListTable} />
            <Route path="/admin/societyMembersAllList" exact component={SocietyMembersAllListTable} />
            <Route path="/admin/creatRole" exact component={CreateRoleForm} />
            <Route path="/admin/rolesList" exact component={RolesListTable} />
            <Route path="/admin/editSociety" exact component={EditSocietyForm} />
            <Route path="/admin/editRole" exact component={EditRoleForm} />

            
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
