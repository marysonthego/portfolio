function mergeLists(head1, head2) {
  if (!head1) return head2
  if (!head2) return head1

  if(head1.data < head2.data){
      return {"data": head1.data, "next": mergeLists(head1.next, head2)}
  }else{
      return {"data": head2.data, "next": mergeLists(head1, head2.next)}
  }
}
