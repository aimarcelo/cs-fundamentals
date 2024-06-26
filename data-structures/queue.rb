class Queue
  attr_accessor :queue, :max_length

  def initialize(max_length)
    @queue = []
    @max_length = max_length
  end
  
  def enqueue(value)
    return queue.push(value) unless is_full?
    puts "Queue is FULL!, Ignoring #{value}"
  end

  def dequeue
    return queue.shift unless is_empty?
    puts 'Queue is EMPTY! Returning null.'
  end
  
  def is_empty?
    queue.length == 0
  end

  def is_full?
    queue.length >= max_length
  end
end

queue = Queue.new(5)

puts "is_empty?: #{queue.is_empty?}"
queue.enqueue("Gelo")

puts "is_empty?: #{queue.is_empty?}"
puts "is_full?: #{queue.is_full?}"

queue.enqueue("Aim")
queue.enqueue("Nathan")
queue.enqueue("Pancho")
queue.enqueue("Lexibbpwinces")

puts "Queue: #{queue.queue}"
puts "is_full?: #{queue.is_full?}"

queue.enqueue("Cody")
puts "Queue: #{queue.queue}"

puts "Dequeued: #{queue.dequeue}"
puts "Dequeued: #{queue.dequeue}"

queue.enqueue("Cody")
puts "Queue: #{queue.queue}"

puts "Dequeued: #{queue.dequeue}"
puts "Dequeued: #{queue.dequeue}"
puts "Dequeued: #{queue.dequeue}"
puts "Dequeued: #{queue.dequeue}"
puts "Dequeued: #{queue.dequeue}"