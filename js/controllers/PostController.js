app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'cbj.svg'
      },
      comment: {
        img: 'dog.jpg',
        text: 'How much for that dogg in the window?'
      }
    },


    {
      author: {
        name: 'Matthew Healy',
        avatar: 'mh.svg'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ]  
}]);