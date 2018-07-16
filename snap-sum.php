<?php
/**
 * sums an array old school
 *
 * @param array $arrayToSum array of numerics to sum
 * @return int|float value of sum
 **/
function sumArrayOldSchool(array $arrayToSum) {
	$sum = 0;
	forEach($arrayToSum as $item) {
		$sum = $sum + $item;
	}
	return $sum;
}
/**
 * sums an array the easy way
 *
 * @param array $arrayToSum array of numerics to sum
 * @return float|int of sum
 **/
function sumArrayEasyWay(array $arrayToSum) {
	return array_sum($arrayToSum);
}
?>