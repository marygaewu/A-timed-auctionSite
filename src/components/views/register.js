
<form onsubmit={ this.handleSubmit }>
  <ModalHeader>Live Auction Registration</ModalHeader>
  <ModalBody>
    <label>Name:</label>
    <input type = "text" value = { this.state.name } onChange = { this.handleChangeName } className = "form-control" />
  </ModalBody>
  <ModalFooter>
    <Button type = "submit" onclick = { this.handleSubmit } color = "success" className = "btn btn-success">Register</Button>
    <Button type = "danger" className = "btn btn-danger" onclick = { this.toggle } >Cancel</Button>
  </ModalFooter>
</form>
