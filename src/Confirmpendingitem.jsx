

function showConfirmationDialog(item, Handleonapprove) {
  const MySwal = withReactContent(Swal);

  console.log("confirm " + item);

  MySwal.fire({
    text: 'Are you sure you want to approve this claim?',
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

export default showConfirmationDialog;
