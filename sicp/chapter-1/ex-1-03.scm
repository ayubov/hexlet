(def (sum-of-larger-square a b c)
     (cond
           ((and (a > c) (b > c)) (+ (* b b) (* a a)))
           ((and (a > b) (c > b)) (+ (* a a) (* c c)))
           ((and (b > a) (c > a)) (+ (* b b) (* c c)))
     ))
           
