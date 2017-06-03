(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))

  ;If predicate (> b 0) is true, it would be (+ a b), else (- a b) 
