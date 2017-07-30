angular.module("umbraco").controller("tooorangey.NameSync", function ($scope,editorState) {
    var vm = this;
    var currentEditorState = editorState.getCurrent();

    vm.status = { synching: !(currentEditorState.name.length > 0), firstSync: true};
   

    vm.trySync = trySync;
    vm.toggleSync = toggleSync;

      function trySync() {
          // if synching when we update title, we update name
          var currentEditorState = editorState.getCurrent();

          if (vm.status.firstSync && !angular.isUndefined(currentEditorState.name) && currentEditorState.name.length > 0) {
              vm.status.synching = false;
          }
         
          if (vm.status.synching) {
              vm.status.firstSync = false;
              console.log($scope.model.value);
          
              console.log(currentEditorState);
              currentEditorState.name = $scope.model.value;
              editorState.set(currentEditorState);
              
          }

      };

      function toggleSync() {
          vm.status.synching = !vm.status.synching;
      };
      
});