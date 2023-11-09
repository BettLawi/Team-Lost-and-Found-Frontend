
function showConfirmationDialog(item) {
    const MySwal = withReactContent(Swal);
  
    MySwal.fire({
      title: 'Are you sure?',
      text: 'Once claimed, the item status will be updated.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Claim'
    }).then((result) => {
      if (result.isConfirmed) {
        Handleonapprove(item);
      }
    });
  }