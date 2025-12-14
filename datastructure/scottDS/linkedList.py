# create the general that prevent repeating the creation of the node each timme 
class Node:
  def __init__(self, value):
    self.value = value
    self.next = None

# create the class list 
class List:
  def __init__(self, value):
    New_Node = Node(value)
    self.head = New_Node
    self.tail = New_Node
    