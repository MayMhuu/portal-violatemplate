export default function checkBtnPermission(
  search,
  ctrl,
  permissionBtnInfo,
  authState,
  api,
) {
  const queryData = { search, ctrl, roles: authState.auth.roles };

  return api.authFetch
    .post('/admin/permission/findPermissions', queryData)
    .then((res) => {
      if (res.data.err === 200) {
        return api.authFetch
          .post('/admin/permission/getRolePermissionIdList', {
            roles: authState.auth.roles,
          })
          .then((result) => {
            if (result.data.err === 200) {
              const checkPermissionData = res.data;
              const rolePermissionList = result.data.data;
              const btnList = [];
              checkPermissionData.rolePermissionList = rolePermissionList;

              if (
                checkPermissionData.filterPermissions &&
                checkPermissionData.filterPermissions.length > 0
              ) {
                // check have access permission or not
                checkPermissionData.filterPermissions.map((obj) => {
                  const haveAccess =
                    checkPermissionData.rolePermissionList.includes(obj.id);
                  obj.haveAccess = haveAccess;
                  return false;
                });
                // bind btnModel to have permission access
                permissionBtnInfo.map((obj) => {
                  return checkPermissionData.filterPermissions.map((obj2) => {
                    if (obj2.action === obj.action) {
                      btnList[obj.btnModel] = obj2.haveAccess;
                    }
                    return false;
                  });
                });
                return btnList;
              } else {
                //all btn are false
                permissionBtnInfo.map((obj) => {
                  btnList[obj.btnModel] = false;
                  return false;
                });
                return btnList;
              }
            }
          });
      }
    });
}
