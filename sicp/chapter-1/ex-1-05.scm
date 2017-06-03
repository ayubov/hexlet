; Exercise 1.5
; Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is using
; applicative-order evaluation or normal-order evaluation. He defines the following two procedures:

; self referencing procedure that will end up in endless recursion when evaluated.
(define (p) (p))

; test is procedure that has 2 branches based on input x so we can choose if we evaluate the second branch.
(define (test x y)
  (if (= x 0)
      0
      y))

; then he tests the interpreter with
; (test 0 (p))
___

; Normal order evaluation:
;   In this case operand (p) will not be evaluated and function will return 0 as result.
;
; Applicative order evaluation:
;   In this case operand y will be by default evaluated and then it will
;  finish in recursion of (p) evaluation.
