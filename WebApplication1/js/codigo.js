var miApp = angular.module("miApp", [])

miApp.controller("controllerAeropuerto", function ($scope, $http) {
    $scope.aeropuertos = [];
    $scope.ABMC = 'A';
    $scope.provincias = [{ name: 'Cordoba' }, { name: 'Buenos Aires' }, { name: 'Santa Fe' }]


    $scope.guardar = function () {

        
            $scope.aeropuertos.push({
                name: $scope.nombreaer,
                internacional: $scope.internacional,
                cantidadhan: $scope.cantidadhan,
                fechaconse: $scope.fechaconse,
                clave: $scope.clave,
                costo: $scope.costo,
                provincia: $scope.provincia

            }); //agrego el nuevo pais a la lista de paises
            $scope.name = "";
            $scope.cantidadhan = 0;
            $scope.clave = "";
            $scope.costo = 0;

      
    };
})