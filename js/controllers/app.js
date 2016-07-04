function TodoCtrl($scope) {
    $scope.todos = [

        { name: 'shiva', family: 'soleimani', pcode: 2 }
        , { name: 'iman', family: 'esmaili', pcode: 1 },
    ];

    $scope.addTodo = function () {
        $scope.todos.push({ name: $scope.personName, family: $scope.personFamily, pcode: $scope.personCode });
        $scope.personFamily = '';
        $scope.personName = '';
        $scope.personCode = '';
    };
    $scope.clear = function () {
        $scope.todos = [];
        $scope.todoText = '';
    };
}