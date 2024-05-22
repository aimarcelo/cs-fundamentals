class Stack
  attr_accessor :stack, :max_height

  def initialize(max_height)
    @stack = []
    @max_height = max_height
  end

  def push(value)
    if is_full?
      puts "Stack is FULL! Ignoring #{value}."
    else 
      stack.push(value)
    end
  end

  def pop
    if is_empty?
      puts "Stack is EMPTY! Returning nil."
      return nil
    else
      stack.pop
    end
  end

  def peek
    stack[stack.length - 1]
  end

  def is_empty?
    stack.length == 0
  end

  def is_full?
    stack.length >= max_height
  end

end


book_stack = Stack.new(5)

puts "is_empty: #{book_stack.is_empty?}"

book_stack.push('Math')

puts "is_empty?: #{book_stack.is_empty?}" 
puts "is_full?: #{book_stack.is_full?}"

book_stack.push('Anatomy')
book_stack.push('Computer Science')
book_stack.push('Physics')
book_stack.push('English')

book_stack.push('History')

puts "is_full?: #{book_stack.is_full?}"
puts "Peek: #{book_stack.peek}"

puts "Pop: #{book_stack.pop}"
puts "Pop: #{book_stack.pop}"
puts "Pop: #{book_stack.pop}"
puts "Pop: #{book_stack.pop}"
puts "Pop: #{book_stack.pop}"
puts "Pop: #{book_stack.pop}"